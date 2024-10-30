const mongoose = require('mongoose');


const adminProductSchema = new mongoose.Schema({
    title:{type:String, required:true},
    desc:{type:String, required:true},
    price:{type:String, required:true},
    productCode:{type:String, required:true},
    quantity:{type:Number, required:true},
    img:[{type:String, required:false}],
},{
    timestamps:true,
    versionKey:false
})

const adminProductModel = mongoose.model("adminProduct", adminProductSchema)

module.exports = adminProductModel; 