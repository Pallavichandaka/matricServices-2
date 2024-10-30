const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    collageOrInstitute:{type:String, required:true},
    areaOfStudy:{type:String, required:true},
    askYourQuestions:{type:String, required:true},
    eventId: {type:mongoose.Schema.Types.ObjectId, ref:"adminProduct"}
},{
    timestamps: true,
    versionKey:false
})


const registerModel = mongoose.model("productRegister", registerSchema);

module.exports = registerModel;