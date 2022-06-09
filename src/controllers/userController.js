const UserModel= require("../models/userModel")
const bookModel = require('../models/bookModel')

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

// solution 1st 

const createBook = async function(req,res) {
let Data = req.body;
let saveData = await bookModel.create(Data);
res.send({msg : saveData})
}

// solution 2nd 

const booklist = async function(req,res) {
    let allBooks = await bookModel.find().select({ bookName : 1, authorName :1, _id :0});
    res.send({msg : allBooks})
}

// solution 3rd 

const getBooksInYear = async function (req, res){
    let myYear = req.body.year
    let allBooks = await bookModel.find({myYear : year}).select({bookName :1, _id :0})
    res.send({msg : allBooks})
}

// solution 4th 

const getParticularBooks = async function (req, res){
     let myData = req.body
     let allBooks = await bookModel.find(myData)
     res.send({msg : allBooks})
}

// solution 5th

const getXINRBooks = async function (req, res){
    let allBooks = await bookModel.find({"priceCodeBook.indianPrice" : {$in : ["600","450","500"]} }).select({bookName:1, _id:0})
    res.send({msg : allBooks})
}

// solution 6th

const getRandomBooks = async function (req, res){
    let allBooks = await bookModel.find({ $or : [{totalPages : {$gt :500}}, {stockAvailable : true}]}).select({bookName : 1, _id : 0}).count()
    res.send({msg : allBooks})

}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createBook= createBook
module.exports.booklist= booklist
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks