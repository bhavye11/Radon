const blogsModel = require("../models/blogsModel")

const getBlogs = async function(req, res){
    try{
        let queryData= req.query
        
        if (Object.keys(queryData).length !== 0) {
            let findByQuery = await blogsModel.find({ $and: [{ isDeleted: false }, { isPublished: true }, queryData] } )
            if (findByQuery.length == 0) {
            return res.status(404).send({ status: false, msg: "No such data found" })
            }
            res.status(200).send({ status: true, data: findByQuery })
        } else {
            let findData = await blogsModel.find({ $and: [{ isDeleted: false }, { isPublished: true }] })
            if (!findData) {
                return res.status(404).send({ status: false, msg: "No data found" })
            } else {
                res.status(200).send({ status: true, data: findData })
            }
        }
    } catch (error){
        console.log(error.message)
        res.status(500).send({ err: error.message})
    }
}

const deleteByBlogId = async function(req, res){
    try{
        let idOfBlog = req.params.blogId
        if(!idOfBlog) return res.status(400).send({status: false, msg: "Blog id is mandatory"})

        let blogCheck = await blogsModel.findById(idOfBlog)
        if(!blogCheck) return res.status(404).send({status: false, msg: "Blog not found, please provide valid blogId"})

        deletedTime= new Date().toISOString();

        await blogsModel.findByIdAndUpdate({_id: idOfBlog},{isDeleted: true, deletedAt:deletedTime})

        res.status(200).send({ status: true, msg: "Blog Deleted Successfully"})
    } catch(error){
        console.log(error.message)
        res.status(500).send({ err: error.message})
    }
}

const deleteByQueryParams = async function(req, res){
    try{
        let queryData = req.query
        let deletedDocument = await blogsModel.updateMany({queryData},{$set:[{isDeleted:true}]})
        console.log(queryData)
        console.log(deletedDocument)
        res.status(200).send({status: true, msg: "Blog Deleted Successfully"})
    } catch(error){
        console.log(error.message)
        res.status(500).send({ err: error.message})
    }
}

module.exports = { getBlogs, deleteByBlogId, deleteByQueryParams }

