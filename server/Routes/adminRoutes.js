const router = require('express').Router();
const { addAdmin, loginAdmin, studentList, pushNotice, getAllNotice, updateNotice, deleteNotice, getAllQuery, updateIQueryStatus, deleteStudentRegistrationForm, takeNewAdmission, deleteAdmin, getAdminList, pushANewCourse, getCourseList, generateCertificate, verifyCertificate, adminProfile, deleteQuery, deleteCourse,pushPhoto,deletePhotos,getPhotos } = require('../Controller/adminController');
const requireAdminLogin = require('../Middleware/requireAdminLogin');
// Admin Routes
router.post('/addAdmin', addAdmin);
router.post('/login', loginAdmin);
router.get('/adminProfile',requireAdminLogin,adminProfile);
router.get('/getAdminList', requireAdminLogin, getAdminList);
router.delete('/deleteAdmin/:_id', requireAdminLogin, deleteAdmin)

//Course Routes
router.post('/pushANewCourse', requireAdminLogin, pushANewCourse);
router.get('/getCourseList',requireAdminLogin,getCourseList);
router.delete('/deleteCourse/:_id',requireAdminLogin,deleteCourse);

// Student Routes
router.post('/studentList', requireAdminLogin, studentList);
router.put('/takeNewAdmission/:_id', requireAdminLogin, takeNewAdmission);
router.delete('/deleteStudentRegistrationForm/:_id', requireAdminLogin, deleteStudentRegistrationForm);

// Certificate Routes
router.post('/generateCertificate',requireAdminLogin,generateCertificate);
router.post('/verifyCertificate',verifyCertificate);

// Notice Routes
router.post('/pushNotice', requireAdminLogin, pushNotice);
router.get('/getAllNotice', getAllNotice);
router.put('/updateNotice', requireAdminLogin, updateNotice);
router.delete('/deleteNotice/:_id', requireAdminLogin, deleteNotice);

// Query Routes
router.get('/getAllQuery', requireAdminLogin, getAllQuery);
router.put('/updateIQueryStatus', requireAdminLogin, updateIQueryStatus);
router.delete('/deleteQuery/:_id',requireAdminLogin,deleteQuery);
// Gallery Routes
router.post('/pushPhoto',requireAdminLogin,pushPhoto);
router.post('/getPhotos',getPhotos);
router.delete('/deletePhoto/:_id',requireAdminLogin,deletePhotos);
module.exports = router;

