const authorModel= require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send({data: authorCreated})
}

const createPublisher=async function(req, res){
    let publisher=req.body
    let publisherCreated=await publisherModel.create(publisher)
    res.send({msg:publisherCreated})
}

const getAllBooks = async function(req,res){

    let savedData = await bookModel.find().populate('author_id')

    res.send({msg:savedData})

}

const createBook = async function (req, res){
    let bookData = req.body
    let authorId = bookData.author_id
    if(!authorId) {
    res.send("author id is required")
    }
    let savedAuthData =  await authorModel.findById(authorId)
    if(!savedAuthData){
     res.send("invalid author Id")
    }
    let publisherId = bookData.publisher_id
    if(!publisherId){
     res.send("publisher id is required")
    }
    let savedPubData = await publisherModel.findById(publisherId)
    if(!savedPubData){
     res.send("invalid publisher id")
    }
    let savedData = await bookModel.create(bookData)
    res.send({msg : savedData})
}

const updateData = async function (req, res) {
    // update hardcover to true for few books
    let hardCoverPublishers = await publisherModel.find({ name: { $in: ['Penguin', 'HarperCollins'] } }).select({ _id: 1 })
    let arrayOfPublishers = []

    for (let i = 0; i < hardCoverPublishers.length; i++) {
        let objId = hardCoverPublishers[i]._id
        arrayOfPublishers.push(objId)
    }

    let books = await bookModel.updateMany({ publisher: { $in: arrayOfPublishers } }, { isHardCover: true })

    res.send({ data: books })
}


module.exports.createBook= createBook
module.exports.createPublisher= createPublisher
module.exports.createAuthor= createAuthor
module.exports.getAllBooks=getAllBooks
module.exports.updateData=updateData
