const mongoose = require('mongoose');

const Connection = ()=>{
    return mongoose.connect("mongodb+srv://fixmymill:SB5SMqwh7Ocd9PuF@cluster0.xd4ov.mongodb.net/")
}
 
module.exports = Connection;