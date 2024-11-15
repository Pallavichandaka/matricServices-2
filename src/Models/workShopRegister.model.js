const mongoose = require('mongoose');

const workShopRegisterSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    collageOrInstitute:{type:String, required:true},
    areaOfStudy:{type:String, required:true},
    askYourQuestions:{type:String, required:true},
    eventId: {type:mongoose.Schema.Types.ObjectId, ref:"adminWorkshop", required:true},
},{
    timestamps: true,
    versionKey:false
})


const workShopRegisterModel = mongoose.model("workShopRegister", workShopRegisterSchema);

module.exports = workShopRegisterModel;