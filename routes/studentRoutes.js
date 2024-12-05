import Router  from 'express';
const router = Router();
import validator from '../middleware/studentVMw'
import valid from '../middleware/logVMw'
import validate from '../middleware/regVMw'
import {studentRegister,studentLogin,getAllStudents,getStudent,createStudent,updateStudent,deleteStudent} from '../controllers/studentController';


router.route('/registration').post(validate,studentRegister);
router.route('/login').post(valid,studentLogin);
router.route('/').get(getAllStudents);
router.route('/:id').get(getStudent);
router.route('/').post(validator,createStudent);
router.route('/:id').put(updateStudent);
router.route('/:id').delete(deleteStudent);

export default router;
