const express= require("express");
const router=express.Router();
const userCompany=require("../models/userCompany");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {registreRules, loginRules, validation} = require('../Middleware/validatorCompany');
const isAuth = require("../Middleware/passeportCompany");



// route test
// router.get("/", (req,res)=>{
    
//     res.send("hello word")
// });

// register
router.post("/registerCompany",registreRules(), validation, async (req,res)=> {
    
    const {name,gerant,NumeroSiret,adress,CIN,email,imageLink,password,phone,date}= req.body;
    console.log("req.body",req.body)
try {
    const newUserCompany= new userCompany ({name,gerant,NumeroSiret,adress,CIN,email,imageLink,password,phone,date});
    
    // check if the email exist
    const searchUser= await userCompany.findOne({email})
    if (searchUser){
return res.status(400).json({msg: "user already exist"})
    };

    // // hash password
    const salt=10;
    const genSalt= await bcrypt.genSalt(salt);
    console.log("genSalt",genSalt)
    const hashedPassword= await bcrypt.hash(password,genSalt);
    console.log(hashedPassword);
    newUserCompany.password=hashedPassword;


    // save the company

    // generate token 
   const newUserCompanyToken= await newUserCompany.save();
    const payload = {
        _id : newUserCompanyToken._id,
        name: newUserCompanyToken.name,
    };
    const token= await jwt.sign(payload,process.env.secretKey, { expiresIn: 3600 });

    res.status(200).send(
        { userCompany : newUserCompanyToken,
          msg: "Company is saved successfully",
          token : `Bearer ${token}`});

    // company not saved
} catch (error) {
    res.status(500).json({msg : "can not save the company"});
    console.log(error)
}
});

// login
router.post("/loginCompany",loginRules(), validation, async(req,res)=> {
    const {email,password}= req.body;
    try {
    // find if the userModel exist
    const searchedUser= await userCompany.findOne ({email});
    // if the email does not exist
    if (!searchedUser) {
        return res.status(400).json({msg : "Bad Credential"});
    };
    // if the password are equals
    const match= await  bcrypt.compare(password, searchedUser.password)

    if (!match) {
        return res.status(400).json({msg : "Bad Credential"});
    };


    // create token
    const payload= {
        _id: searchedUser._id,
        email: searchedUser.email,
        name: searchedUser.name,
        phone:searchedUser.phone,
        imageLink:searchedUser.imageLink,


    };

    const token= await jwt.sign(payload,process.env.secretKey, { expiresIn: 3600 });

    // send the userModel
    res.status(200).send(
        {userModel : searchedUser,
        msg : "login success",
        token : `Bearer ${token}`});

    } catch (error) {
      res.status(500).json({msg : "can not get the company"})  
    }
});


router.get("/currentCompany", isAuth(),(req,res)=> {
res.status(200).send({user: req.user})
console.log(userCompany)

});



// @Method GET
// @desc GET all companies
// path : http://localhost:5000/userCompany/Company
router.get("/Company", async (req,res)=>{
    console.log("hello")
    // res.send("jemmp")
    try {
      const result= await userCompany.find();
      console.log("resulllllllt",result)
      res.send({response : result, msg : "Getting company successfully"});
    } catch (error) {
        res.status(400).send ({msg : "can not get the companies"});
        console.log(error)
    }
});

// @Method GET company by id
// @desc GET a company by id
// path : http://localhost:5000/userCompany/Company/:id
// @param id
router.get("/Company/:id", async (req,res)=>{
    try {
      const result= await userCompany.findOne({_id : req.params.id});
      res.send({response : result, msg : "Getting company by id successfully"});
    } catch (error) {
        res.status(400).send ({msg : "there is no contact with this id"});
    }
});

// @Method DELETE company by id
// @desc DELETE a company by id
// path : http://localhost:5000/userCompany/Company/:id
// @param id
router.delete("/Company/:id", async (req,res)=>{
    try {
      const result= await userCompany.deleteOne({_id : req.params.id});
      result.n? res.send({ msg : "Company deleted"}): res.send({ msg : "there is no company with this id"})

    } catch (error) {
        res.status(400).send ({msg : "there is no id"});
    }
});

// @Method PUT company by id
// @desc PUT a company by id
// path : http://localhost:5000/userCompany/Company/:id
// @param id Body
router.put("/Company/:id", async (req,res)=>{
    try {
      const result= await userCompany.updateOne({_id : req.params.id}, {$set : {...req.body}});
      console.log(result)
      result.nModified? res.send({ msg : "company Updated"}) : res.send({ msg : "company already Updated"})

    } catch (error) {
        res.status(400).send ({msg : "there is no company to Update"});
    }
});

module.exports =router;