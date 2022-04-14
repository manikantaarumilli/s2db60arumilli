const mongoose = require("mongoose") 
const jamSchema = mongoose.Schema({ 
 name: String, 
 cost: Number, 
 quantity: String 
}) 
 
module.exports = mongoose.model("jam", 
jamSchema) 