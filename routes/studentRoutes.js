const express =require('express');
const router = express.Router();
const validator = require('../middleware/studentValidMw')
const validate = require('../middleware/regVMw')
const valid = require('../middleware/logVMw')

const {studentRegister,studentLogin,getAllStudents,getStudent,createStudent,updateStudent,deleteStudent} = require('../controllers/studentController');


router.route('/registration').post(validate,studentRegister);
router.route('/login').post(valid,studentLogin);
router.route('/').get(getAllStudents);
router.route('/:id').get(getStudent);
router.route('/').post(validator,createStudent);
router.route('/:id').put(updateStudent);
router.route('/:id').delete(deleteStudent);

module.exports = router;
