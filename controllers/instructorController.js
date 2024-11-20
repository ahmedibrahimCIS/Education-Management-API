const instructor = require('../models/instructorModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();
//reg
let instructorRegister = async (req, res) => {
    try {
    const { name ,email, dept, id, password, confirmPassword } = req.body;
      let logged = await instructor.findOne({email:req.body.email}).exec();
    if(logged){
      return res.status(400).send("user already registered");
      }
  
  
      // Check if password and confirm password match
      if (password !== confirmPassword) {
          return res.status(400).send("Passwords do not match");
      }
  
      
          const hashedPassword = await bcrypt.hash(password, 10);
  
          const instruct = new instructor({
              name,
              email,
              dept,
              id,
              password: hashedPassword,
          });
  
          await instruct.save();
          console.log("User registered:", instruct);
          res.status(201).send("User registered successfully");
      } catch (error) {
          console.error("Error registering user:", error);
          res.status(500).send("Error registering user");
      }
  }
  
  //login
  let instructorLogin = async (req, res) => {

    try {
        const inst = await instructor.findOne({ email:req.body.email }).exec();
        if (!inst) return res.status(401).send("Invalid email or password");

        const isPasswordValid = await bcrypt.compare(req.body.password, inst.password);
        if (!isPasswordValid) return res.status(401).send("Invalid email or password");
        const srcToken = process.env.JWT_SECRET;
        if(!srcToken) return res.status(500).send("Bad Request..");
        const token = jwt.sign({instid : inst._id},srcToken)
        res.header('x-auth-token',token)
        res.status(200).send("logged in...");
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send("An error occurred");
    }
}

//CRUD OPS  

//get all instructors
let getAllInstruct = async (req,res)=>{
    try{
       let insts =  await instructor.find().select({name:1,dept:1,email:1});
       res.status(200).json(insts)
    }catch(error){
        console.log(error.message);
        
    }
    
}

//get specific instructor
let getInstructById = async (req,res)=>{
    try{
        let inst = await instructor.findById(req.params.id);
        if (!inst) res.status(404).send('user not found');
             res.status(200).json(inst);
    }catch(error){
        console.log(error.message);
        
    }
}

//add new instructor
let addNewInstruct = (req,res)=>{
    let inst = new instructor({
        name:req.body.name,
        dept:req.body.dept,
        email:req.body.email,
        id:req.body.id,
        password:req.body.password
    });

    inst.save().then(res.status(201).json('New instructor added...')).catch((err)=>{
        res.status(400).send('Bad Request..')
    });
}

//update instructor info
let updatInstructInfo = async (req,res)=>{
    try{
        let inst = await instructor.findByIdAndUpdate(req.params.id, req.body,{returnOriginal:false});
        if(!inst) return res.status(404).send('Instructor not found');
        res.status(201).json(inst);
    }catch(err){
        console.log(err.message);
        
    }
}

//delete instructor
let deleteInstruct =async (req,res)=>{
    try{
        let inst = await instructor.findByIdAndDelete(req.params.id);
        if(!inst) return res.status(404).send('Instructor not found');
        res.status(201).json('Instructor deleted successfully');
    }catch(err){
        console.log(err.message);
        
    }
}


module.exports = {instructorRegister,instructorLogin,getAllInstruct,getInstructById,addNewInstruct,updatInstructInfo,deleteInstruct};