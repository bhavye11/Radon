const d=new Date()
    console.log("Today is "+ d)

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const m= month [d.getMonth()] 
console.log("Month is "+ m )

const batch=function () {
console.log(batch)
}
module.exports.date=d
module.exports.month=m
module.exports.batch=batch