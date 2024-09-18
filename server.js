import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import organizationRoutes from './routes/organization.route.js'
import employeeRoutes from './routes/employee.route.js'
import cors from 'cors'
import checkinRoutes from './routes/checkin.route.js'
dotenv.config()

const app = express();
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors({
    origin:'*'
}))
process.on('uncaughtException',(err)=>{
    console.log(err.message)
    console.log("Unhandled exception occured! shutting down")
   
        process.exit(1);
   
    
})

const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_CONN_STR,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>{console.log("server has just started")}))



app.use('/api/arduino/organization',organizationRoutes)
app.use('/api/arduino/employee',employeeRoutes)
app.use('/api/arduino/checkin',checkinRoutes)

