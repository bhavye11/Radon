const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        unique: true,
        required:true
    },
    authorName: String,
    category: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    Year:Number
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)