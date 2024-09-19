import mongoose from "mongoose";
const CheckoutsSchema = new mongoose.Schema({
    employeeId:{
        type:mongoose.Types.ObjectId,
        ref:"employee"
    },
    organizationId:{
        type:String,
        required:true
    }
},{timestamps:true})

export default mongoose.model('checkout',CheckoutsSchema)