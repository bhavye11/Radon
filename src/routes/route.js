const express=require("express");
const router=express.Router();

const bookController=require("../controllers/bookController.js")

router.post("/create_Author",bookController.createNewAuthor)
router.post("/createNewBook",bookController.createNewBook)  
router.get("/getBooks",bookController.getBook)
router.get("/anotherBookUpdate",bookController.anotherBookUpdate)
//router.get("/indBookletween",allcontroller.findlooks between)
module.exports=router;