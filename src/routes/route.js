const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

// Sabiha assignment

//Assignment 1
router.get('/movies', function (req, res) {
    const movie = ['horror', 'The Shining', 'Heropanthi', 'KGF', 'Avengers']
    res.send(movie)
})

//Assignment 2
router.get('/movies/:indexNumber', function (req, res) {
    const movie = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    
   res.send(movie[1])
})

//assignment 3
/*router.get('/movies/:indexNumber1', function (req, res) {
    
    const movie = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
                for(var i=0; i<movie.length; i++){ 
                if(movie[i]>movie.length){
                    console.log("use a valid index")

             }
            }
res.send(movie)
})*/

//assignment 4

router.get('/films', function (req, res) {
    const movie = [{
        'id':1,
        'name':'Prem Rog'
    },

    {
       'id':2,
      'name':'Yaarana'
    },

    {
        'id':3,
        'name':'The Heroapanti'
    },

    {
        'id':4,
        'name':'KGF'
    }]

   res.send(movie)
    })

    //assignment 5

    router.get('/films/:filmid',function(req,res){

        const film=[{'id':1,'name':'Prem rog'},{'id':2,'name':'Yaarana'},{'id':3,'name':'KGF'},{'id':4,'name':'Heropanti'}]
        let x=req.params.filmid
         x=x-1
    
        let flag=0
    
        for(let i=0;i<4;i++){
    
            if(i==x){
    
                flag=1
    
                break
    
            }}
    
            if(flag==1){
    
                return res.send(film[x])
    
            }
    
            else{
    
                return res.send("no movie exists with this id")
    
            }
    
       
    
    })



module.exports = router;