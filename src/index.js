const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const router = require('./routes/route.js');
const res = require('express/lib/response');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

//Pritesh assignment 2
app.get("/sol1", function(req, res){
    let arr= [1,2,3,5,6,7]
    let b=arr.length+1
    let data=arr[0]
    for(let i=0; i<b; i++){
        if(arr[i]==data){
            data++
        } else {
            missingNumber=data
        }  
    }
res.send({data:missingNumber});
});

//Pritesh assignment 2
app.get("/sol2", function(req, res){
    let arr= [33, 34, 35, 37, 38]
    let b=arr.length+1
    let data=arr[0]
    for(let i=0; i<b; i++){
        if(arr[i]==data){
            data++
        } else {
            missingNumber=data
        }  
    }
res.send({data:missingNumber});
});