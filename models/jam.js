const mongoose = require("mongoose") 
const jamSchema = mongoose.Schema({ 
    name:{
     type: String,
     minLength: 1,
     maxLength: 10
    },
 cost: Number, 
 quantity: String 
}) 
 
module.exports = mongoose.model("jam", 
jamSchema) 