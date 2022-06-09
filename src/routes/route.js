const express=require("express");
const router=express.Router();

const bookController=require("../controllers/bookController")

router.post("/createNewAuthor",bookController.createNewAuthor)
roster.post("/createNewBook",bookController.createNewBook)  
router.get("/getBooks",bookcontroller.getCbBooks)
router.get("/anotherBookUpdate",bookController.anotherBookUpdate)
//router.get("/indBookletween",allcontroller.findlooks between)
module.exports=router;