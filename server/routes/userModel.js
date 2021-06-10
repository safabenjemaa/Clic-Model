const express= require("express");
const router=express.Router();
const userModel=require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {registreRules, loginRules, validation} = require('../Middleware/validator');
const isAuth = require("../Middleware/passeport");



// route test
// router.get("/", (req,res)=>{
    
//     res.send("hello word")
// });

// register
router.post("/registerModel",registreRules(), validation, async (req,res)=> {
    
    const {name,lastName,age,CIN,email,password,phone,imageLink,instagramLink,personLength,personWeight,date}= req.body;
try {
    const newUserModel= new userModel ({name,lastName,age,CIN,email,password,phone,imageLink,instagramLink,personLength,personWeight,date});
    
    // check if the email exist
    const searchUser= await userModel.findOne({email})
    if (searchUser){
return res.status(400).json({msg: "user already exist"})
    };

    // // hash password
    const salt=10;
    const genSalt= await bcrypt.genSalt(salt);
    const hashedPassword= await bcrypt.hash(password,genSalt);
    console.log(hashedPassword);
    newUserModel.password=hashedPassword;


    // save the model

    // generate token 
   const newUserModelToken= await newUserModel.save();
    const payload = {
        _id : newUserModelToken._id,
        name: newUserModelToken.name,
    };
    const token= await jwt.sign(payload,process.env.secretKey, { expiresIn: 3600 });

    res.status(200).send(
        { userModel : newUserModelToken,
          msg: "user is saved successfully",
          token : `Bearer ${token}`});

    // model not saved
} catch (error) {
    res.status(500).json({msg : "can not save the userModel"});
}
});

// login
router.post("/loginModel",loginRules(), validation, async(req,res)=> {
    const {email,password}= req.body;
    try {
    // find if the userModel exist
    const searchedUser= await userModel.findOne ({email});
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
        msg : "login sucess",
        token : `Bearer ${token}`});

    } catch (error) {
      res.status(500).json({msg : "can not get the userModel"})  
    }
});


router.get("/current", isAuth(),(req,res)=> {
res.status(200).send({user: req.user})
console.log(userModel)
console.log(token)

});



// @Method GET
// @desc GET all models
// path : http://localhost:5000/userModel/Models
router.get("/Models", async (req,res)=>{
    console.log("hello")
    // res.send("jemmp")
    try {
      const result= await userModel.find();
      res.send({response : result, msg : "Getting models successfully"});
    } catch (error) {
        res.status(400).send ({msg : "can not get the Models"});
        console.log(error)
    }
});

// @Method GET Model by id
// @desc GET a model by id
// path : http://localhost:5000/userModel/Models/:id
// @param id
router.get("/Models/:id", async (req,res)=>{
    try {
      const result= await userModel.findOne({_id : req.params.id});
      res.send({response : result, msg : "Getting model by id successfully"});
    } catch (error) {
        res.status(400).send ({msg : "there is no contact with this id"});
    }
});

// @Method DELETE Model by id
// @desc DELETE a model by id
// path : http://localhost:5000/userModel/Models/:id
// @param id
router.delete("/Models/:id", async (req,res)=>{
    try {
      const result= await userModel.deleteOne({_id : req.params.id});
      result.n? res.send({ msg : "Model deleted"}): res.send({ msg : "there is no model with this id"})

    } catch (error) {
        res.status(400).send ({msg : "there is no id"});
    }
});

// @Method PUT Model by id
// @desc PUT a model by id
// path : http://localhost:5000/userModel/Models/:id
// @param id Body
router.put("/Models/:id", async (req,res)=>{
    try {
      const result= await userModel.updateOne({_id : req.params.id}, {$set : {...req.body}});
      console.log(result)
      result.nModified? res.send({ msg : "Model Updated"}) : res.send({ msg : "Model already Updated"})

    } catch (error) {
        res.status(400).send ({msg : "there is no Model to Update"});
    }
});

module.exports =router;