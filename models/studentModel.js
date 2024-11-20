const mongoose = require('mongoose')
//Create Schema
const stdSchema = new mongoose.Schema({
    name:{type:String,
        required:true
    },
    dept:{type:String,
        required:true
    },
    email:{type:String,
        required:true

    },
    id:{type:Number,
        required:true,
        unique:true
    },
    password:{type:String,
        required:true,
    }
});

//Create Model
const Student = mongoose.model('students',stdSchema);

module.exports = Student;
