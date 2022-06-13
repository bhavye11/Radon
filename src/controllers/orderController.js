const orderModel= require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function (req, res) {
    let data = req.body;
    let userId = await userModel.findById(req.body.userId)
    let productId = await productModel.findById(req.body.productId)
    let str = ""
    let saveData
    if (!data.userId)
        res.send({ msg: "User ID is required" })
    else if (!userId)
        res.send({ msg: "Enter valid User ID" })
    else if (!data.productId)
        res.send({ msg: "Product ID is required" })
    else if (!productId)
        res.send({ msg: "Enter valid Product ID" })
    else {
        saveData = await OrderModel.create(data);
        if (req.headers["isfreeappuser"] === "true") {
            await orderModel.updateOne({ userId: data.userId }, { $set: { amount: 0 } }, { new: true })
        }
        else {
            let Price = productId.price;
            if (userId.balance >= Price) {
                await userModel.updateOne({ _id: data.userId }, { $inc: { balance: -Price } }, { new: true })
                await orderModel.updateOne({ _id: saveData._id }, { $set: { amount: Price } }, { new: true })
                res.send({ msg: saveData });
            }
            else res.send({ msg: "user is not having enough balance" })
        }

    }
}
module.exports.createOrder= createOrder
