const mongoose = require("mongoose") 
const jamSchema = mongoose.Schema({ 
    name:{
     type: String,
     minLength: 1,
     maxLength: 10
    },
    cost: {
      type: Number,
      min: 1,
    /*  max: 2 */
    },
 quantity: String 
}) 
 
module.exports = mongoose.model("jam", 
jamSchema) 