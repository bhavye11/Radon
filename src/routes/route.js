const express = require('express');
const router = express.Router();

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get('/createUser', function (req, res, next){
    res.send('current path is', req.path)
})
module.exports = router;
