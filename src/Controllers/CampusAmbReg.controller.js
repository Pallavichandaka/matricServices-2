const campusAmbRegModel = require("../Models/CampusAmbReg.model");


const campusAmbReg = {
    getData:async(req,res)=>{
        try {
            const data  = await campusAmbRegModel.find().sort({ createdAt: -1 })
            return res.status(200).send({message:"getData success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    postData:async(req,res)=>{
        try {
            const data  = await campusAmbRegModel.create(req.body)
            return res.status(200).send({message:"post success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    singleData:async(req,res)=>{
        try {
            const data  = await campusAmbRegModel.findById(req.params.id)
            return res.status(200).send({message:"SingleData success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    editData:async(req,res)=>{
        try {
            const data  = await campusAmbRegModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
            return res.status(200).send({message:"Edit data success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    deleteData:async(req,res)=>{
        try {
            const data  = await campusAmbRegModel.findByIdAndDelete(req.params.id)
            return res.status(200).send({message:"Deleted success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },
}


module.exports = campusAmbReg;