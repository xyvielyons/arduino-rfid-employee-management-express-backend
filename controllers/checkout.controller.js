import employeeModel from "../models/employee.model.js"
import checkoutsModel from "../models/checkouts.model.js"
export const createCheckout = async(req,res,next)=>{
    try {
        const receivedUid = req.body.rfiduid
        const findEmployee = await employeeModel.findOne({
            tagNumber:receivedUid
        })
        if(!findEmployee){
            res.status(200).json({
                row1:"failed to checkout",
                row2:"employee not found"
            })
            return console.log("error the employee could not be found")
        }
        const createCheckin = new checkoutsModel({
            employeeId:findEmployee._id,
            organizationId:findEmployee.organizationId
        })
        await createCheckin.save()
        res.status(200).json({
            row1:"employee checked out",
            row2:"logged"
        })
    } catch (error) {
        res.status(500).json({
            row1:"internal ",
            row2:"server error"
        })
        console.log(error)
    }
    
}
export const getCheckouts = async(req,res,next)=>{
    try {
        const organizationId = req.body.organizationId
        const getcheckins = await checkoutsModel.find({
            organizationId
        }).populate("employeeId")
        res.status(200).json({
            status:"success",
            data:getcheckins
        })
    } catch (error) {
        res.status(500).json({
            status:"failed",
            data:"failed to get checkins"
        })
        console.log(error)
    }
    
}

export const deleteCheckout = async(req,res,next)=>{
    try {
        const checkinId = req.body.checkinId
        const deletedCheckin = await checkoutsModel.findByIdAndDelete(checkinId)
        res.status(200).json({
            status:"success",
            data:deletedCheckin
        })
    } catch (error) {
        res.status(500).json({
            status:"failed",
            data:"failed to delete checkin"
        })
        console.log(error)
    }
}