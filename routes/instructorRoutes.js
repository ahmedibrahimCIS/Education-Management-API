const express =require('express');
const router = express.Router();
const _validator = require('../middleware/instructorVMw')
const valid = require('../middleware/regVMw')
const validate =require('../middleware/logVMw')
const {instructorRegister,instructorLogin,getAllInstruct,getInstructById,addNewInstruct,updatInstructInfo,deleteInstruct} = require('../controllers/instructorController');

router.route('/registration').post(valid,instructorRegister);
router.route('/login').post(validate,instructorLogin);
router.route('/').get(getAllInstruct);
router.route('/:id').get(getInstructById);
router.route('/').post(_validator,addNewInstruct);
router.route('/:id').put(updatInstructInfo);
router.route('/:id').delete(deleteInstruct);

module.exports = router;