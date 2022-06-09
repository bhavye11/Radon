const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

let createNewBook=async function (req,res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}
let createNewAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getBook= async function(req, res){
    let author= await authorModel.find({authorName:"Chetan Bhagat"}).select({author_id:1,_id:0});
    let authorId=author[0]
    let savedData= await bookModel.find(authorId).select({name:1,_id:0})
    res.send({msg : savedData}) 
}

const anotherBookUpdate= async function(req, res){
    let updateBook=await bookModel.findOneAndUpdate({name:"Ashish Negi"}, {$set:{price:100}}, {new:true})
    let price=updateBook.price
    let ab=updateBook.author_id
    let authorName=await authorModel.find({author_id:ab}).select({author_Name:1,id:0})
    let name=authorName[0]
    res.send({msg:name,price})
}


// const findBooksBetween=async function(req,res){
//let data= await bookModel.find(price:{$gte:50, $lte:100}).select({author_id:1, _id:0})
//     id=bookData.map(inp=> inp.author_id)
// }
// //     let abc=[]
//     for (let i=0;i<bookData.length; i++){
//     var x = bookData[i]
//     const author=authormodel.find({author_id:x}).select({authorName:1, _id:0})
//     temp.push(author)
// }

//const author_name=temp.flat()
//res.send({msg: author_name})




module.exports.createNewBook= createNewBook
module.exports.createNewAuthor= createNewAuthor
module.exports.getBook= getBook
module.exports.anotherBookUpdate= anotherBookUpdate
//module.exports.booksCost= booksCost
