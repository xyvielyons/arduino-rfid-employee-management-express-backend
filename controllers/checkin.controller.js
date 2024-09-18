import employeeModel from "../models/employee.model.js"
import checkinsModel from "../models/checkins.model.js"
export const createCheckin = async(req,res,next)=>{
    try {
        const receivedUid = req.body.rfiduid
        const findEmployee = await employeeModel.findOne({
            tagNumber:receivedUid
        })
        if(!findEmployee){
            res.status(200).json({
                status:"error",
                data:"employee could not be found"
            })
            return console.log("error the employee could not be found")
        }
        const createCheckin = new checkinsModel({
            employeeId:findEmployee._id,
            organizationId:findEmployee.organizationId
        })
        await createCheckin.save()
        console.log(createCheckin)

        console.log(findEmployee)
        res.status(200).json({
            status:"success",
            data:req.body
        })
    } catch (error) {
        res.status(500).json({
            status:"failed",
            data:"failed to create checkin"
        })
        console.log(error)
    }
    
}
export const getCheckins = async(req,res,next)=>{
    try {
        const organizationId = req.body.organizationId
        const getcheckins = await checkinsModel.find({
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

export const deleteCheckin = async(req,res,next)=>{
    try {
        const checkinId = req.body.checkinId
        const deletedCheckin = await checkinsModel.findByIdAndDelete(checkinId)
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