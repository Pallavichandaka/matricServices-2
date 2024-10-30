const mongoose = require('mongoose');


const campusAbmReg = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    collageOrInstitute:{type:String, required:true},
    areaOfStudy:{type:String, required:true},
    knowAboutMatricService:{type:String, required:true},
    whyBecAmb:{type:String, required:true},
},{
    timestamps:true,
    versionKey:false
})

const campusAbmRegModel = mongoose.model("campusAbmReg", campusAbmReg)

module.exports = campusAbmRegModel;