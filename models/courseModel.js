import mongoose from 'mongoose';

const courseSchema =new mongoose.Schema({
    "course_name":{type:String,
        required:true
    },
    
    "course_id":{type:Number,
            required:true,
            unique:true
    },
   
    "credits":{type:Number,
        required:true
    }
});


export default mongoose.model('courses', courseSchema);