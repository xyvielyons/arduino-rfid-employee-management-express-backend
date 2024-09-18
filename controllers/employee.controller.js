import employeeModel from "../models/employee.model.js"
export const createEmployee = async(req,res,next)=>{
    try {
        const employeeData = req.body;
        const createEmployee = new employeeModel(employeeData);
        await createEmployee.save();
        console.log(createEmployee)
        res.status(200).json({
            status:"success",
            data:createEmployee
        })
    } catch (error) {
        res.status(500).json({
            status:"error",
            data:"failed to register employee"
        })
    }
}

export const getEmployees = async(req,res,next)=>{
    try {
        const employees = await employeeModel.find()
        res.status(200).json(employees)
    } catch (error) {
        res.status(500).json({
            status:"error",
            data:"failed to get employees"
        })
    }
}

export const deleteEmployee = async(req,res,next)=>{
    try {
        const deletedEmployee = await employeeModel.findByIdAndDelete(req.body.id)
        res.status(200).json({
            status:"success",
            data:deletedEmployee
        })
    } catch (error) {
        res.status(500).json({
            status:"error",
            data:"failed to delete employee"
        })
    }
}