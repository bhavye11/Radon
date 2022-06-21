const mongoose=require('mongoose')
const objectID=mongoose.Schema.Types.ObjectId

const blogModel=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  authorId:{
    type:objectID,
    ref:'Author'
  },
  tag:[String],
  category: {
    type:String,
    required:true,
  },
  subCategory:[String],
  createdAt:{
    type:Date,
    default:null
  },
  updatedAt:{
    type:Date,
    default:null
  },
  deletedAt:{
    type:Date,
    default:null
  },
  isDeleted:{
    type:boolean,
    default:false
  },
  publishedAt:{
    type:Date,
    default:null
  },
  isPublished:{
    type:boolean,
    default:false
  }
})