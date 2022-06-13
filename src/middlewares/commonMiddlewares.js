const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")

const headerValidation = async function (req, res, next) {
    await userModel.updateMany({}, { $set: { isFreeAppUser: false } },{upsert:true})
    await orderModel.updateMany({}, { $set: { isFreeAppUser: false } },{upsert:true})
    if (!req.headers["isfreeappuser"])
        res.send({ msg: "this request has a missing mandatory header" })
    else
        next()
}

module.exports.headerValidation = headerValidation