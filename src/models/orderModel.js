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
isFreeAppUser:{
    type:Boolean,
    date:Date
},
date:String
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) 
