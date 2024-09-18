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