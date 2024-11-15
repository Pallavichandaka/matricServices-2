const workShopModel = require("../Models/workShopRegister.model");


const workShopRegisterController = {
    getData:async(req,res)=>{
        try {
            const data  = await workShopModel.find().populate("eventId").sort({ createdAt: -1 })
            return res.status(200).send({message:"getData success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    postData:async(req,res)=>{
        try {
            const data  = await workShopModel.create(req.body)
            return res.status(200).send({message:"post success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    singleData:async(req,res)=>{
        try {
            const data  = await workShopModel.findById(req.params.id).populate("eventId")
            return res.status(200).send({message:"SingleData success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    editData:async(req,res)=>{
        try {
            const data  = await workShopModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
            return res.status(200).send({message:"Edit data success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    deleteData:async(req,res)=>{
        try {
            const data  = await workShopModel.findByIdAndDelete(req.params.id)
            return res.status(200).send({message:"Deleted success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },
}


module.exports = workShopRegisterController;