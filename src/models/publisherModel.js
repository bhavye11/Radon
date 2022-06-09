const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema( {
    name: String,
    location:String,
    rating:Number
}, { timestamps: true });


module.exports = mongoose.model('Publisher', bookSchema)