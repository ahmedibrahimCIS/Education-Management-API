import Student from '../models/studentModel';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

let studentRegister = async (req, res) => {
    try {
  const { name ,id, dept, email, password, confirmPassword } = req.body;
    let logged = await Student.findOne({email:req.body.email}).exec();
  if(logged){
    return res.status(400).send("user already registered");
    }


    // Check if password and confirm password match
    if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match");
    }

    
        const hashedPassword = await bcrypt.hash(password, 10);

        const std = new Student({
            name,
            id,
            dept,
            email,
            password: hashedPassword,
        });

        await std.save();
        console.log("User registered:", std);
        res.status(201).send("User registered successfully");
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Error registering user");
    }
}

//login
let studentLogin = async (req, res) => {

    try {
        const std = await Student.findOne({ email:req.body.email }).exec();
        if (!std) return res.status(401).send("Invalid email or password");

        const isPasswordValid = await bcrypt.compare(req.body.password, std.password);
        if (!isPasswordValid) return res.status(401).send("Invalid email or password");
        const srcToken = process.env.JWT_SECRET;
        if(!srcToken) return res.status(500).send("Bad Request..");
        const token = jwt.sign({stdid : std._id},srcToken)
        res.header('x-auth-token',token)
        res.status(200).send("logged in...");
        res.status(200).send("Login successful");
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send("An error occurred");
    }
}


//CRUD ops
//getAll
let getAllStudents=async(req,res)=>{
    try{
   let student= await Student.find().select({name:1,dept:1,email:1});
    res.send(student);
    }
    catch(error){
        console.log(error.message);
        res.status(400).send('Bad Request..');
        
    }

    }

    


//get by id

let getStudent=async (req,res)=>{
    try{
    let student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send('Student not Fount');
    res.send(student); 
    }
    catch(error){
        console.log(error.message);
        res.status(400).send('Bad Request..');
        
    }
}

//add student
let createStudent =(req,res)=>{
    let student = new Student({
        name:req.body.name,
        dept:req.body.dept,
        id:req.body.id,
        email:req.body.email,
        password:req.body.password
    })

    student.save().then(res.status(201).send("saved..")).catch((error)=>{
        console.log(error.message);
        res.status(400).send('Bad Request..');
        
    });
};


//update a student
let updateStudent = async(req,res)=>{
    try{
    let student = await Student.findByIdAndUpdate(req.params.id,req.body,{returnOriginal:false});
    if(!student) return res.status(404).send("Not Found");
    res.send(student);
    }
    catch(error){
        console.log(error.message);
        res.status(400).send('Bad Request..');
        
    }

}



//delete a sudent
let deleteStudent =async (req,res)=>{
    try{
    let student= await Student.findByIdAndDelete(req.params.id);
    if(!student) return res.status(400).send("Invalid ID");
    res.send('Deleted Successfully');
    }
    catch(error){
        console.log(error.message);
        res.status(400).send('Bad Request..');
        
    }
}


export {studentRegister,studentLogin,getAllStudents,getStudent,createStudent,updateStudent,deleteStudent};
