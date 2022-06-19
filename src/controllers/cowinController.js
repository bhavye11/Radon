let axios = require("axios")


let getStates = async function (req, res) {
  // Axios provides shorthand methods for performing different requests, url or different parameters)
    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Assignment 1
let getVaccinationCentre = async function (req, res) {
    try {
        let district = req.query.districtId
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Assignment 2
let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityobjArray = []
       for(i=0; i<cities.length; i++){
        let obj = { city : cities[i] }
        let ass = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=2c29df65d0c204922e25f23b1423dd2d`)
               console.log(ass.data.main.temp)

               obj.temp = ass.data.main.temp
               cityobjArray.push(obj)
     }
        let sorted = cityobjArray.sort(function (a,b) { return a.temp - b.temp})

        console.log (sorted)
        req.status(200).send({status : true , data: sorted})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg:"server error"})
    }
}

//Assignment 3 

let memeHandler = async function (req, res) {
    try {

        let memeId = req.query.template_id
        let data1 = req.query.text0
        let data2 = req.query.text1

        var options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${data1}&text1=${data2}&username=chewie12345&password=meme@123`
     }

        let result = await axios(options)
       res.send({ data: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg:"server error"})
    }
}





let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts

module.exports.getVaccinationCentre = getVaccinationCentre 
module.exports.getSortedCities = getSortedCities
module.exports.memeHandler = memeHandler

module.exports.getByPin = getByPin
module.exports.getOtp = getOtp