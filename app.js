const express =require('express');
const mongoose = require('mongoose')
const errorHandler =require("./middleware/errorHandler")
const studentRouter = require('./routes/studentRoutes')
const instructRouter =require('./routes/instructorRoutes')
const courseRouter = require('./routes/courseRoutes')

//DB Config
mongoose.connect('mongodb://localhost:27017/school').then(()=>{console.log('MongoDB Connected...');
}).catch((error)=>{
    console.log(error.message);
    
});

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/students', studentRouter);
app.use('/instructor', instructRouter);
app.use('/course',courseRouter);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
})
