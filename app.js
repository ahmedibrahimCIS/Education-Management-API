import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRoutes.js';
import instructRouter from './routes/instructorRoutes.js';
import courseRouter from './routes/courseRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import dotenv from 'dotenv';
dotenv.config();

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
