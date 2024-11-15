const mongoose = require('mongoose');

const subscribeSchema  = new mongoose.Schema({
    subEmail:{type:String, required:true}
},{
    timestamps:true,
    versionKey:false
})


const subscribeModel =  mongoose.model("subscribe", subscribeSchema);

module.exports = subscribeModel;