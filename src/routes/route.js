const express=require('express');
const router=express.Router();
const authorController=require('../controller/authorController')
const blogController=require('../controller/blogController')

router.post('/authors', authorController.createAuthor)

router.get("/blogs", blogController.getBlogs)  // Rhutvik Patel

router.delete("/blogs/:blogId", blogController.deleteByBlogId) // Rhutvik Patel

router.delete("/blogs", blogController.deleteByQueryParams)  // Rhutvik Patel

module.exports = router;