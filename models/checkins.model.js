import mongoose from "mongoose";
const CheckinsSchema = new mongoose.Schema({
    employeeId:{
        type:mongoose.Types.ObjectId,
        ref:"employee"
    },
    organizationId:{
        type:String,
        required:true
    }
},{timestamps:true})

export default mongoose.model('checkin',CheckinsSchema)