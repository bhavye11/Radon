const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController")

router.post("/createBook", bookController.createBook)

router.post("/createAuthor", bookController.createAuthor)

router.post("/findAndUpdate", bookController.findAndUpdate)

router.post("/booksCost", bookController.booksCost)

router.post("/getbook", bookController.getBook)


module.exports = router;