const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWTKEYS = process.env.JWTKEYS;
const { notice, admin, course, gallery } = require("../Model/admin");
const { student, enquiry, certificate } = require("../Model/student");

// Student Controller
const studentList = (async (req, res) => {
    try {
        const { name, regNum } = req.body;
        const query = {};
        if (name !== undefined && name !== null && name !== '') {
            query.name = { $regex: new RegExp(name, 'i') };
        }
        if (regNum !== undefined && regNum !== null && regNum !== '') {
            query.regNum = regNum;
        }
        student.find(query).then((result) => {
            res.json(result)
        })
    } catch (error) {
        res.json({ error: "Some Internal Error Occured", mError: error });
    }
})
const takeNewAdmission = (async (req, res) => {
    try {
        const _id = req.params._id;
        const iNum = req.body.iNum;
        const centerCode = process.env.CENTERCODE;
        if (!_id || !iNum) {
            return res.json({ error: "Student Id and Student Index No. is Required" });
        }
        else {
            await student.findById(_id).then((result) => {
                if (result == null) {
                    return res.json({ message: "Student Registration Form Does Not Exist" });
                }
                else {
                    if (result.admitted === true) {
                        return res.json({ message: 'You Have been Already Taken This Student Admission' });
                    } else {
                        let regNum = centerCode + '/' + result.course + '/' + iNum;
                        student.findByIdAndUpdate(_id, { $set: { admitted: true, regNum: regNum } }).then(() => {
                            return res.json({ message: "Student has Been Admitted" });
                        }).catch((error) => {
                            return res.json({ message: "Some Internal Error Occured While Admission", mError: error });
                        })
                    }
                }
            }).catch((error) => {
                return res.json({ message: "Student Registration Form Does Not Exist", mError: error });
            })
        }
    } catch (error) {
        console.log(error)
        res.json({ message: "Some Internal Error Occured", mError: error });
    }
})

const deleteStudentRegistrationForm = (async (req, res) => {
    try {
        const _id = req.params._id;
        if (!_id) {
            return res.status(400).json({ error: "Student Id Not Gotten" });
        }
        else {
            await student.findOneAndDelete({ _id: _id, admitted: false }).then((result) => {
                if (result == null) {
                    res.json({ message: "Student Registration Form Does Not Exist Or You have been taken Student Admission" });
                }
                else {
                    res.json({ message: "Student Registration Form Has Been Deleted" });
                }
            }).catch((error) => {
                res.json({ message: "Student Registration Form Does Not Exist", mError: error });
            })
        }
    } catch (error) {
        res.json({ message: "Some Internal Error Occured", mError: error });
    }
})
// Student Certificate Controllers
const generateCertificate = (async (req, res) => {
    try {
        const { _id, percentage, issueDate } = req.body;
        if (!_id || !percentage || !issueDate) {
            return res.status(404).json({ message: "Student Id and Percentage boath are Required" });
        }
        else {
            const data = await student.findOne({ _id: _id, admitted: true }).select('regNum');
            if (data == null) {
                return res.status(404).json({ message: "Student Data Not Found Or Student have Not Taken Admission" });
            }
            else {
                const newCertificate = new certificate({
                    student: _id,
                    completationDate: issueDate,
                    percentage: percentage,
                    regNum: data.regNum
                });
                await newCertificate.save().then(async (data) => {
                    await student.findByIdAndUpdate(_id, { gnCertificate: '1' });
                    return res.status(200).json({ message: "Certificate Generated Successfully" });
                }).catch((error) => {
                    console.log(error)
                    return res.status(500).json({ message: "Some Error Occured While Generating Certificate", mError: error });
                });
            }

        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "some Internal Error Occured", mError: error });
    }
})
const verifyCertificate = (async (req, res) => {
    try {
        const { regNum } = req.body;
        if (!regNum) {
            return res.status(400).json({ error: "Invalid Registaration Number" });
        }
        await certificate.findOne({ regNum: regNum }).populate('student')
            .then(async (data) => {
                if (!data) {
                    return res.status(400).json({ error: "Certificate Not Available" });
                }
                var details = {
                    name: data.student.name,
                    photo: data.student.photo,
                    fatherName: data.student.fatherName,
                    regNum: data.student.regNum,
                    completationDate: data.completationDate,
                    percentage: data.percentage,
                    course: data.student.course
                }
                await course.findOne({ name: details.course }).then((crs) => {
                    if (!crs) {
                        return res.status(404).json({ error: "Course not found" });
                    }
                    else {
                        details.subjects = [crs.subjects];
                        return res.status(200).json({ details });
                    }
                }).catch((error) => {
                    console.log(error);
                })
            })

    } catch (error) {
        console.log(error);
    }
})

// Admin Controller
const addAdmin = (async (req, res) => {
    try {
        const { name, email, profilePic, dob, mobileNumber, address, profession, about, aadhaarNumber, password } = req.body;
        if (!name || !email || !profilePic || !dob || !mobileNumber || !address || !profession || !about || !aadhaarNumber || !password) {
            return res.json({ error: "Please Add All Fields" });
        } else {
            bcrypt.hash(password, 9).then(async (hashedPassword) => {
                const adminData = new admin({
                    name, email, profilePic, dob, mobileNumber, address, profession, about, aadhaarNumber, password: hashedPassword
                });
                await adminData.save().then((data) => {
                    const token = jwt.sign({ _id: data._id }, process.env.JWTKEYS);
                    return res.json({ token: token });
                }).catch((error) => {
                    return res.json({ message: "Some Error Occured", error: error })
                })
            }).catch((error) => {
                return res.json({ error: "Some Internal Error Occured", mError: error });
            })
        }
    } catch (error) {
        res.json({ error: 'Some Error Occured', mError: error });
    }
});
const loginAdmin = (async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ error: "Please Add All The Fields" });
        } else {
            const adminData = await admin.findOne({ email });
            if (adminData) {
                bcrypt.compare(password, adminData.password).then((result) => {
                    if (result) {
                        const token = jwt.sign({ _id: adminData._id }, JWTKEYS);
                        const { _id, name, email, profilePic, dob, mobileNumber } = adminData;
                        res.json({ token: token, adminData: { _id, name, email, profilePic, dob, mobileNumber } });
                    } else {
                        res.status(401).json({ error: 'Password Did Not Matched' });
                    }
                }).catch((error) => {
                    res.status(401).json({ error: 'Password Did Not Matched', mError: error });
                })
            }
            else {
                res.status(401).json({ error: 'Please Enter Valid Credential' });
            }
        }
    } catch (error) {
        return res.json({ error: "Some Error Occured", mError: error });
    }
});
const adminProfile = async (req, res) => {
    try {
        await admin.findById(req.user._id)
            .select('-password')
            .then((data) => {
                if (!data) {
                    return res.status(404).json({ error: 'Admin Data Not Found' })
                }
                else {
                    return res.json(data);
                }
            })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })
    }
}
const getAdminList = async (req, res) => {
    try {
        console.log(req.user)
        if (req.user.root == true) {
            await admin.find().select('-password').then((admins) => {
                res.json(admins);
            }).catch((error) => {
                res.json({ message: "Server is Busy", error: error });
            })
        } else {
            return res.status(401).json({ error: "You are Not Authorized" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', mError: error });
    }
};
const deleteAdmin = async (req, res) => {
    try {
        const _id = req.params._id;
        if (!_id) {
            return res.status(400).json({ message: 'Admin Id Required' });
        }
        else {
            await admin.findOneAndDelete({ _id: _id, root: false }).then((result) => {
                if (result == null) {
                    return res.status(401).json({ message: 'Root Admin Can not Be Delete' });
                }
                else {
                    return res.status(200).json({ message: 'Admin Account deleted successfully' });
                }
            }).catch((error) => {
                return res.status(404).json({ message: "Admin Data Does Not Exist", mError: error });
            })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', mError: error });
    }
};
// Course Controller
const pushANewCourse = async (req, res) => {
    try {
        const { name, description, duration, subjects, prerequisites } = req.body;
        if (!name || !description || !duration || !subjects) {
            return res.status(400).json({ error: "Please provide all the required fields" });
        } else {
            const courseData = new course({ name, description, duration, subjects, prerequisites });
            await courseData.save().then(() => {
                res.json({ message: `${name} course has Been Pushed` });
            }).catch((error) => {
                res.status(500).json({ message: "Some Internal Error Occured", mError: error })
            })
        }
    } catch (error) {
        res.status(500).json({ message: "Some Internal Error Occured", mError: error })
    }
}
const getCourseList = (async (req, res) => {
    try {
        const courseList = await course.find();
        if (courseList) {
            res.json(courseList);
        } else {
            res.json({ error: "Courses Does Not Exist" });
        }
    } catch (error) {
        res.json({ error: "Some Internal Error Occured", mError: error });
    }
});
const deleteCourse = (async (req, res) => {
    try {
        const _id = req.params._id;
        if (!_id) {
            return res.status(400).json({ mError: "Course Id not found" });
        } else {
            await course.findByIdAndDelete(_id).then((data) => {
                console.log(data);
                return res.send(data);
            }).catch((error) => {
                return res.status(400).json({ message: "Some Internal Error Occured", mError: error });
            })
        }
    } catch (error) {
        console.log(error);
        return res.json(500).json({ message: "Some Internal Error Occured", mError: error });
    }
})
// Notice Controller
const pushNotice = (async (req, res) => {
    try {
        const { title, nMessage } = req.body;
        if (!title || !nMessage) {
            return res.json({ error: "Please Fill All The Fields" });
        }
        else {
            const noticeData = new notice({
                title, nMessage
            });
            await noticeData.save().then(() => {
                res.json({ message: 'Notice Has Been Pushed' })
            }).catch((error) => {
                return res.json({ error: "Some Internal Error Occured", mError: error });
            })
        }
    } catch (error) {
        console.log(error);
    }
});
const getAllNotice = (async (req, res) => {
    try {
        let allNotice = await notice.find().select('title nMessage')
        if (allNotice) {
            res.json(allNotice);
        }
        else {
            res.json({ message: 'Not Exist' });
        }
    } catch (error) {
        return res.json({ error: "Some Internal Error Occured", mError: error });
    }
});
const updateNotice = (async (req, res) => {
    try {
        const { _id, title, nMessage } = req.body;
        if (!_id) {
            res.json({ message: "Notice Does Not Exist" });
        }
        else {
            await notice.findOneAndUpdate({ _id: _id }, { $set: { title: title, nMessage: nMessage } }, { new: true }).then((notice) => {
                res.json({ message: "Saved" });
            }).catch((error) => {
                res.json({ error: "Notice Does Not Exists" });
            });
        }
    } catch (error) {
        return res.json({ error: "Some Internal Error Occured", mError: error });
    }
});
const deleteNotice = (async (req, res) => {
    try {
        const _id = req.params._id;
        if (!_id) {
            return res.json({ error: "Id not Gotten Error occured" });
        }
        else {
            await notice.findByIdAndDelete({ _id: _id }).then((result) => {
                if (result == null) {
                    res.json({ message: "Notice Does Not Exist" });
                }
                else {
                    res.json({ message: "Notice Has Been Deleted" });
                }
            }).catch((error) => {
                res.json({ message: "Notice Does Not Exist", mError: error });
            })
        }
    } catch (error) {
        return res.json({ error: "Some Internal Error Occured", mError: error });
    }
});

// Query Controller
const getAllQuery = (async (req, res) => {
    try {
        const allQuery = await enquiry.find();
        if (allQuery) {
            res.json(allQuery);
        } else {
            res.json({ error: "Query Not Exist" });
        }
    } catch (error) {
        res.json({ error: "Some Internal Error Occured", mError: error });
    }
});
const updateIQueryStatus = (async (req, res) => {
    try {
        const _id = req.body;
        if (!_id) {
            return res.json({ error: "Query Id not Found" });
        } else {
            const query = await enquiry.findByIdAndUpdate(_id, { $set: { iSolveStatus: true } }, { new: true });
            return res.json(query.iSolveStatus);
        }
    } catch (error) {
        return res.json({ error: "Some Internal Error Occured", mError: error });
    }
});
const deleteQuery = (async (req, res) => {
    try {
        const _id = req.params._id;
        if (!_id) {
            return res.json({ error: "Id not Gotten Error occured" });
        }
        else {
            await enquiry.findByIdAndDelete({ _id: _id }).then((result) => {
                if (result == null) {
                    res.json({ message: "Query Does Not Exist" });
                }
                else {
                    res.json({ message: "Query Has Been Deleted" });
                }
            }).catch((error) => {
                res.json({ message: "Query Does Not Exist", mError: error });
            })
        }
    } catch (error) {
        return res.json({ error: "Some Internal Error Occured", mError: error });
    }
});
// Gallery Controller
const pushPhoto = (async (req, res) => {
    try {
        const { name, url, category } = req.body;
        if (!name || !url || !category) {
            return res.status(400).json({ error: "Name ,url,category Parameter are Blank" });
        } else {
            const newPhoto = new gallery({
                name: name,
                category: category,
                url: url
            });
            await newPhoto.save();
            return res.status(201).json({ message: "Picture Inserted" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Picture is Already exist", mError: error });
    }
})
const getPhotos = (async (req, res) => {
    try {
        const { category } = req.body;
        const query = {};
        if (category !== undefined || category !== null || category !== '') {
            query.category = { $regex: new RegExp(category, 'i') }
        }
        await gallery.find(query)
            .then((photos) => {
                if (photos.length < 1) {
                    return res.status(404).json({ message: "No Photos Available" });
                } else {
                    return res.status(200).json(photos);
                }
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Some Internal Error Occured", mError: error });
    }
})
const deletePhotos = (async (req, res) => {
    const _id = req.params._id;
    if (!_id) {
        return res.status(400).json({ error: "Id not found" });
    }
    else {
        await gallery.findByIdAndDelete(_id).then((data) => {
            console.log(data)
            return data == null ? res.status(200).json({ message: "Photo Not exits" }) : res.status(200).json({ message: "Photo Deleted" });
        }).catch((error) => {
            return res.status(400).json({ error: "Photos not available", mError: error });
        })
    }
})
module.exports = {
    // Admin Controller
    addAdmin,
    loginAdmin,
    adminProfile,
    getAdminList,
    deleteAdmin,
    // Course Controller
    pushANewCourse,
    getCourseList,
    deleteCourse,

    // Student Controller
    studentList,
    takeNewAdmission,
    deleteStudentRegistrationForm,

    // Certificate Controller
    generateCertificate,
    verifyCertificate,
    // Notice Controller
    pushNotice,
    getAllNotice,
    updateNotice,
    deleteNotice,
    // Query Controller
    getAllQuery,
    updateIQueryStatus,
    deleteQuery,
    // Gallery Controller
    pushPhoto,
    getPhotos,
    deletePhotos
}

