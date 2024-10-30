const mongoose = require('mongoose');


const ContactUs = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    collageOrInstitute:{type:String, required:true},
    askYourQuestions:{type:String, required:true},
},{
    timestamps:true,
    versionKey:false
})

const contactUsModel = mongoose.model("contactUs", ContactUs)

module.exports = contactUsModel;