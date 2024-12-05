import Router from 'express';
const router = Router();
import _validator from '../middleware/instructorVMw'
import valid from '../middleware/regVMw'
import validate from '../middleware/logVMw'
import {instructorRegister,instructorLogin,getAllInstruct,getInstructById,addNewInstruct,updatInstructInfo,deleteInstruct} from '../controllers/instructorController';

router.route('/registration').post(valid,instructorRegister);
router.route('/login').post(validate,instructorLogin);
router.route('/').get(getAllInstruct);
router.route('/:id').get(getInstructById);
router.route('/').post(_validator,addNewInstruct);
router.route('/:id').put(updatInstructInfo);
router.route('/:id').delete(deleteInstruct);

export default router;