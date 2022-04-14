const mongoose = require("mongoose") 
const jamSchema = mongoose.Schema({ 
 name: String, 
 cost: Number, 
 quantity: string 
}) 
 
module.exports = mongoose.model("jam", 
jamSchema) 