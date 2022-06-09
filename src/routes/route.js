const express=require("express");
const router=express.Router();
const allController=require("../controllers/allController")

router.post("/createNewBook",allController.createBook)  
router.post("/createNewAuthor",allController.createAuthor)
router.post("/createNewPublisher",allController.createPublisher)
router.post("/getAllBooks",allController.getAllBooks)
router.put("/getUpdatedData",allController.updateData)


module.exports=router;