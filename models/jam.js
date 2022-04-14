const mongoose = require("mongoose") 
const jamSchema = mongoose.Schema({ 
 name: String, 
 cost: Number, 
 quantity: Number 
}) 
 
module.exports = mongoose.model("jam", 
jamSchema) 