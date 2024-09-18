import mongoose from "mongoose";
const EmployeeSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    phoneNumber:{
        type:String,
        required:true
    },
    
    idNumber:{
        type:String,
        required:true
    },
    tagNumber:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    
    
},{timestamps:true})

export default mongoose.model('employee',EmployeeSchema)