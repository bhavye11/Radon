const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const ip=require("ip")
const moment=require ("moment")
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://bhavye11:Vdu3SztN9gdhFTvY@cluster0.syjbs.mongodb.net/bhavye1006-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.use (function (req, res, next) {
        currentDateAndTime=moment().format("YYYY-MM-DD hh:mm:ss");
        currentIP=req.ip;
        currentRequestPath=req.path;
        console.log(currentDateAndTime,","+ currentIP +","+currentRequestPath)
        next()
  });


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
