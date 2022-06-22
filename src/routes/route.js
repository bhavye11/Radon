const express=require('express');
const router=express.Router();
const authorController=require('../controller/authorController')
const blogController=require('../controller/blogController')

router.post('/authors', authorController.createAuthor)

router.post("/blogs", blogController.createBlog)

router.get("/blogs", blogController.getBlogs)  

router.put("/blogs/:blogId", blogController.updateBlogs)

router.delete("/blogs/:blogId", blogController.deleteByBlogId) 

router.delete("/blogs", blogController.deleteByQueryParams)  

module.exports = router;