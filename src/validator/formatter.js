const { append } = require("express/lib/response")

const d="     batman       "
const trim=d.trim()
console.log("trim function is applied- "+ trim)

const e="BATMAN"
const lower=e.toLowerCase()
console.log("lower case function is applied- "+ lower)

const f="batman"
const upper=e.toUpperCase()
console.log("upper case is applied- "+ upper)

module.exports.trim=trim
module.exports.lower=lower
module.exports.upper=upper