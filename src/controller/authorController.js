const authorModel = require("../models/authorModel");

const createAuthor = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length == 0) return res.status(400).send({ msg: "Body should not be empty" })
    
    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(data.email)) return res.status(400).send({ message: "Pls Enter Email in valid Format" })

    if(!("fname" in data) || !("lname" in data) || !("title" in data) || !("email" in data) || !("password" in data) ) return res.status(400).send({msg:"fname, lname, title, email, password are required"})

    if (data.password.trim() == "" || data.email.trim() == "" || data.lname.trim() == "" || data.fname.trim() == "" || data.title.trim() == "") return res.status(400).send({msg:"The Required Attributes should not be empty"})

    if(!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/.test(data.fname)) return res.status(400).send({msg:"Pls Enter Valid First Name"})

     
    if(!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/.test(data.lname)) return res.status(400).send({msg:"Pls Enter Valid Last Name"})
    
    let savedData = await authorModel.create(data);
    res.status(201).send({ status: "True", data: savedData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ err : error.message });
  }
};

module.exports.createAuthor = createAuthor;