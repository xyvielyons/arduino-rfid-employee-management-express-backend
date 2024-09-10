import userModel from "../models/user.model.js";
export const arduinoPostMessage=async(req,res,next)=>{
    try {
        const uid = req.body.rfiduid;
        // const createUser = new userModel({
        //     firstName:"xyvie",
        //     lastName:"lyons",
        //     uid:uid,
        // })
        const getUser = await userModel.findOne({
            uid:uid
        })

        // await createUser.save();

        res.status(200).json({
            message:"message recieved",
            data:getUser
        })
        console.log(req.body)
    } catch (error) {
        res.status(500).json({
            message:"message not received",
        })
        console.log(error)
    }
}

export const arduinoGetMessage=async(req,res,next)=>{
    try {
        res.status(200).json({
            key1:"hello",
            key2:12345,
            key3:12.00
        })
        console.log("message sent")
    } catch (error) {
        res.status(500).json({
            message:error,
        })
    }
}