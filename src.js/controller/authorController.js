const authorModel=require('../models/authorModel')

const createAuthor=async function(req, res){
    let data=req.body
    let author=await authorModel.create(data)
    res.send({msg:author})
}





module.exports.createAuthor=createAuthor;