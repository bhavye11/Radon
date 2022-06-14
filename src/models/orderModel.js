const mongoose = require('mongoose');
const objectID=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
user_id:{
    type:objectID,
    ref:"User"
},
product_id:{
    type:objectID,
    ref:"Product"
},
amount:{
    type:Number,
    default:100},
isFreeAppUser:Boolean,
date:Date,
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) 
