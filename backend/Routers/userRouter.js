const express=require('express');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const userModel = require('../Model/userModel');
const userRouter=express.Router();


userRouter.get("/",async(req,res)=>{
    try {
        let Users= await userModel.find()
        res.send(Users)
    } catch (error) {
        res.send("went something wrong")
    }
})

userRouter.post("/register",async(req,res)=>{
        const payload=req.body 
      try {
            
            let user= new userModel(payload)
            await  user.save();
            res.send("user register succesfully")
      } catch (err) {
        res.send(err.message)
      }
})

userRouter.post("/login",async(req,res)=>{
    console.log("req", req.body);
    const { email, password } = req.body;

    const checkUser = await userModel.findOne({
        email: email,
    })

    const pass = checkUser.password;
    bcrypt.compare(password, pass, function (err, result) {
        //console.log('err:', err,result)
        if (err) {
             res.send("Please enter valid credentils");
        }
        else {
            const token = jwt.sign(
                {
                    name: checkUser.name,
                    email: checkUser.email,
                    password: password,
                },
                "SECRET"
            )
            let payload = {
                "_id": checkUser._id,
                "name": checkUser.name,
                "token": token
            }
             res.send(payload);
        }
    });
})

module.exports=userRouter

