import Router from 'express';
const router = Router();
import validator from '../middleware/courseVMw'
const {showCourses,showCourseById,addNewCourse,updatCourse,deleteCourse} =require('../controllers/courseController')

router.route('/').get(showCourses);
router.route('/:id').get(showCourseById);
router.route('/').post(validator,addNewCourse);
router.route('/:id').put(updatCourse);
router.route('/:id').delete(deleteCourse);

export default router;