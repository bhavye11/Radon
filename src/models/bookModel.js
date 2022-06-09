const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name: String, 
    
    author_Id: {
        type:Number,
        required: true
    },
    prices: Number,
    ratings:String
}, { timestamps: true });


module.exports = mongoose.model('BookModel', bookSchema)

