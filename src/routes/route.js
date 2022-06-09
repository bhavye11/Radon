const express = require('express');

const router = express.Router();

// const UserModel= require("../models/userModel.js")

const bookModel= require("../models/bookModel.js")

const userController= require("../controllers/userController.js")

//const BookController= require("../controllers/bookController")



router.get("/test-me", function (req, res) {

    res.send("My first ever api!")

})



//router.post("/createUser", UserController.createUser  )



//router.get("/getUsersData", UserController.getUsersData)

router.post("/createbook", userController.createBook)

router.get("/bookList", userController.booklist)

router.post("/getbooksinyear", userController.getBooksInYear)

router.get("/getxINRbooks", userController.getXINRBooks)

router.get("/getrandombooks", userController.getRandomBooks)

router.get("/getParticularbooks", userController.getParticularBooks)




module.exports = router;