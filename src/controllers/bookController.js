//const { count } = require("console")
//const res = require("express/lib/response")
const authormodel= require("../models/authormodel.js")
const bookModel = require("../models/bookModel.js")

let createBook=async function (req,res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}
let createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authormodel.create(data)
    res.send({msg: savedData})
}

const getBook= async function(req, res){
    let authorData= await authormodel.find({authorName:"Chetan Bhagat"}).select("author_id")
    let bookData= await bookModel.find({author_id:authorData[0].author_Id})
    res.send({msg : bookData}) 
}

const findAndUpdate= async function(req, res){
    let book=await bookModel.findOneAndUpdate({bookName:"2 states"}, {$set:{price:100}}, {new:true})
    let authorData=await authormodel.find({author_id:books.author_id}).select("authorName")
    let price=book.price
    res.send({msg:authorData,price})
}
// const booksCost=async function(req,res){
//     const bookData=await bookModel.find({price:{$gte:50, $lte:100}}).select({author_id:1, _id:0})
//     id=bookData.map(inp=> inp.author_id)
// }
// //     let temp=[]
//     for (let i=0;i<id.length; i++){
//     var x = id[i]
//     const author=authormodel.find({author_id:x}).select({authorName:1, _id:0})
//     temp.push(author)
// }

//const author_name=temp.flat()
//res.send({msg: author_name})




module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getBook= getBook
module.exports.findAndUpdate= findAndUpdate
//module.exports.booksCost= booksCost
