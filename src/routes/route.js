const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")
const userController = require("../controllers/userController")
const orderController = require("../controllers/orderController")
const commonMiddlewares= require("../middlewares/commonMiddlewares")

router.post("/createProduct", productController.createProduct)
router.post("/createUser", commonMiddlewares.headerValidation, userController.createUser)
router.post("/createOrder", commonMiddlewares.headerValidation, orderController.createOrder)

module.exports = router;