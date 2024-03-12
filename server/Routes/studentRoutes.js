const router= require('express').Router();
const {studentRegistration,sendQuery}= require('../Controller/studentController');
router.post('/studentRegistration',studentRegistration);
router.post('/queryNow',sendQuery)
module.exports= router;