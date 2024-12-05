import course from '../models/courseModel.js'

//CRUD OPS

//show courses
let showCourses = async (req,res)=>{
    try{
        let courses = await course.find().select({course_name:1,credits:1});
        res.status(200).json(courses);
    }catch(error){
        console.log(error);
        
    }

}

//show a course
let showCourseById = async (req,res)=>{
    try{
        let courses = await course.findById(req.params.id);
        if(courses) return res.status(200).send(courses);
        else{res.status(404).send('course not found')} 
    }catch(error){
        console.log(error);
        
    }
}

//Add new course
let addNewCourse = (req,res)=>{
    let newCourse = new course({
        course_id:req.body.course_id,
        course_name:req.body.course_name,
        credits:req.body.credits
    })

    newCourse.save().then(res.status(201).send('course added successfully!')).catch((err)=>{
        console.log(err);
        res.status(400).send('Bad Request..');
        
    })
}

//update
let updatCourse = async (req,res)=>{
    try{
        let updatedCourse = await course.findByIdAndUpdate(req.params.id,req.body,{returnOriginal:false});
        if(updatedCourse) return res.status(200).send('course updated successfully!').json(updatedCourse);
        else {res.status(404).send('course not found')} 
    }catch(error){
        console.log(error);
        
  
    }
}

//delete
let deleteCourse = async (req,res)=>{
    try{
        let deletedCourse = await course.findByIdAndDelete(req.params.id);
        if(deletedCourse) return res.status(200).send('course deleted successfully!');
        else {res.status(404).send('course not found')} 
    }catch(error){
        console.log(error);
        
  
    }
    
}

export {showCourses,
        showCourseById,
        addNewCourse,
        updatCourse,
        deleteCourse
};