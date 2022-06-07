const bookModel= require("../models/bookModel")
const UserModel= require("../models/userModel.js")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await bookModel.find()
    res.send({msg: allBooks})
}


const createUser= async function (req, res) {

    let data= req.body

    let savedData= await UserModel.create(data)

    res.send({msg: savedData})

}



const getUsersData= async function (req, res) {

    let allUsers= await UserModel.find()

    res.send({msg: allUsers})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData