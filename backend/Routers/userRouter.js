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
        const {name,email,password,Role}=req.body 
      try {
        bcrypt.hash(password, 5,async function(err, hash) {
            // Store hash in your password DB.
                if(err){
                    res.send(err)
                }else{
                    let user= new userModel({
                        name,
                        email,
                        password:hash,
                        Role
                    })
                    await  user.save();
                }
        })
          
            res.send("user register succesfully")
      } catch (err) {
        res.send(err.message)
      }
})

 // User Login

userRouter.post("/login",async(req,res)=>{
  //  console.log("req", req.body);
    const { email, password } = req.body;

    try{
            const checkUser = await userModel.find({email:email})
            console.log("check",checkUser)
            if(checkUser.length>0){
                bcrypt.compare(password, checkUser[0].password,  (err, result) =>{
                   
                    if (result) {
                        const token = jwt.sign(
                            {
                                name: checkUser[0].name,
                                email: checkUser[0].email,
                                password: password,
                            },
                            "SECRET"
                        )
                        let p = {
                            "_id": checkUser[0]._id,
                            "name": checkUser[0].name,
                             "Role":checkUser[0].Role,
                            "token": token
                        }
                         res.send(p);
                        
                    }
                    else {
                        res.send("Please enter valid credentils");  
                    }
                });
            }else{
                res.send({"masg":"WrongCredential"})
                
            }
           
        
    }catch(err)
    {
        res.send({"msg":"Please Enter valid Credentials","err":err.message})
       
    }
   
})

module.exports=userRouter

