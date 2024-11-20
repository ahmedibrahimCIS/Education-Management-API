const express =require('express')
const router = express.Router();
const validator = require('../middleware/courseVMw')
const {showCourses,showCourseById,addNewCourse,updatCourse,deleteCourse} =require('../controllers/courseController')

router.route('/').get(showCourses);
router.route('/:id').get(showCourseById);
router.route('/').post(validator,addNewCourse);
router.route('/:id').put(updatCourse);
router.route('/:id').delete(deleteCourse);

module.exports = router;