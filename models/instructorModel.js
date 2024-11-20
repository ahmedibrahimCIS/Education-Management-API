const mongoose = require('mongoose')

//Create Schema
const instSchema = new mongoose.Schema({
    name:{type:String,
        required:true
    },
    dept:{type:String,
        required:true
    },
    id:{type:Number,
        required:true,
        unique:true
    },
    email:{type:String,
        required:true,
        unique:true
    },
    password:{type:String,
        required:true,
    }
});

//Create Model
const Instructor = mongoose.model('instructors', instSchema);

module.exports = Instructor;
