const mongoose = require('mongoose');


const getInTouch = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    collageOrInstitute:{type:String, required:true},
    askYourQuestions:{type:String, required:true},
},{
    timestamps:true,
    versionKey:false
})

const getInTouchModel = mongoose.model("getInTouch", getInTouch)

module.exports = getInTouchModel;