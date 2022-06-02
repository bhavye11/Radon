const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();

//router.get('/test-me', function (req, res) {
    // myHelper.printDate()
    // myHelper.getCurrentMonth()
    // myHelper.getCohortData()
    // let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    // console.log('The first element received from underscope function is '+firstElement)
    // res.send('My first ever api!')
//});

router.get('/hello', function (req, res) {
   //Solution 4(a)
    const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   const split=lodash.chunk(months, 3);
   console.log(split)

    //solution 4 (b)
    const odd=[1,3,5,7,9,11,13,15,17,19]
    const tail=lodash.tail(odd, 1)
    console.log(tail) 

    //solution 4(c)
    const a=[1,1,3,4,5,4]
    const b=[3,3,4,6,3,6]
    const c=[9,8,9,7,6,5]
    const d=[1,5,6,4,5,6]
    const e=[3,4,2,5,7,4]
    const duplicate=lodash.union([...a,...b,...c,...d,...e]);
    console.log(duplicate)

   //Solution 4(d)
    const arr = [["Horror", "The Shining"], ["Drama", "Titanic"], ["Thriller", "Shutter Island"], ["Fantasy", "Avengers"]];

    console.log(lodash.fromPairs(arr))
    
    
    res.send('hello there')
});


// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
//})

//router.get('/candidates/:canidatesName', function(req, res){
  //  console.log('The request objects is '+ JSON.stringify(req.params))
    //console.log('Candidates name is '+req.params.canidatesName)
    //res.send('Done')
//})


module.exports = router;
// adding this comment for no reason