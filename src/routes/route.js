const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const middle=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
});

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", middle.middleWare, userController.getUserData)

router.put("/users/:userId", middle.middleWare, middle.middleWare2, userController.updateUser)

router.delete("/users/:userId", middle.middleWare, middle.middleWare2, userController.deleteUser)

module.exports = router;






module.exports = router;