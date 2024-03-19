const { student, enquiry } = require('../Model/student');
const {course} = require("../Model/admin");
const Course= course;
const studentRegistration = (async (req, res) => {
  try {
    const { photo, name, fatherName, motherName, gender, address, mobileNumber, dob, course, category } = req.body;
    if (!photo || !name || !fatherName || !motherName || !gender || !address || !mobileNumber || !dob || !course || !category) {
      return res.status(400).json({ message: "Please Fill All Details" });
    }
    else {
      const studentData = new student({
        photo, name, fatherName, motherName, gender, address, mobileNumber, dob, course, category
      });
      
       await Course.findOne({ name: course }).then(async(crs)=>{
        if(!crs){
          return res.json({message:"Course Does Not Found"})
        }
        else{
          await studentData.save().then(() => {
            res.json({ message: 'Registration Succussfull' });
          }).catch((err) => {
            console.log(err)
            return res.json({ message: err });
          })
        }
      }).catch((error)=>{
        console.log(error);
        return res.json({message:err})  ;
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "Please Fill All Details" });
  }
});

const sendQuery = (async (req, res) => {
 try {
  const { fullName, mobile, email, title, query } = req.body;
  if (!fullName || !mobile || !email || !title || !query) {
    return res.json({ error: 'Please Add all Fields' });
  } else {
    const queryData= new enquiry({
      fullName, mobile, email, title, query
    });
    await queryData.save().then(()=>{
      res.json({message:"Query Submitted"});
    }).catch((error)=>{
      res.json({message:"Some Error Occured",mError:error});
    })
  }
 } catch (error) {
  res.send(error);  
 }
})
module.exports = {
  studentRegistration,
  sendQuery
}
