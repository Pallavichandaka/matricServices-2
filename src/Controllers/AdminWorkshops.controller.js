const adminWorkShops = require("../Models/AdminWorkshops.model");
const uploadToWebSpaceKit = require('../Middlewares/uploadToWebSpaceKit'); 
const fs = require('fs');


const adminWorkShopController = {
    getData:async(req,res)=>{
        try {
            const data  = await adminWorkShops.find();
            return res.status(200).send({message:"getData success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    postData:async(req,res)=>{
        try {

            const images = req.files; 
            const imageUrls = [];
        
            for (const image of images) {
              const filePath = image.path;
              const fileName = image.filename;
        
              const result = await new Promise((resolve, reject) => {
                uploadToWebSpaceKit(filePath, fileName, (err, result) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(result.url);
                  }
                });
              });
        
              imageUrls.push(result);
              fs.unlinkSync(filePath); 
            }

        
            const data  = await adminWorkShops.create({
                topic:req.body.topic,
                desc:req.body.desc,
                venue:req.body.venue, 
                date:req.body.date,
                time:req.body.time,
                criteria:req.body.criteria,
                contact:req.body.contact,
                email:req.body.email,
                img:imageUrls,
            })

            return res.status(200).send({message:"post success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    singleData:async(req,res)=>{
        try {
            const data  = await adminWorkShops.findById(req.params.id)
            return res.status(200).send({message:"SingleData success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    editData:async(req,res)=>{
        try {
            const data  = await adminWorkShops.findByIdAndUpdate(req.params.id, req.body, {new:true})
            return res.status(200).send({message:"Edit data success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },

    deleteData:async(req,res)=>{
        try {
            const data  = await adminWorkShops.findByIdAndDelete(req.params.id)
            return res.status(200).send({message:"Deleted success", data})
        } catch (error) {
            return res.status(500).send({message:"error", error})
        }
    },
}

module.exports = adminWorkShopController;
