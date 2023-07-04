import React, { useEffect, useState } from 'react'
import './style/login.css'
import axios from 'axios'
const UserLogin = () => {

    const [data,setData]=useState({})

    const handleChange= (e) =>{
        const {name,value}=e.target;

        setData({
            ...data,
            [name]:value
        })
      
    }
   
    const handleSubmit = (e)=>{
            e.preventDefault();
            
            axios.post("http://localhost:8080/user/login",data)
            .then(res=>{
                console.log(res)
                if(res.data.token){
                
                    alert("Login Succesfull")
                }else{
                    alert("Wrong Credential")
                }
            }).catch(err=>{
                console.log(err)
            })
    }
  return (
    <div className="login">
        <h1 className="text-center">User LogIn</h1>
        <form action="" className="validation" onSubmit={handleSubmit}>
            <div className="form-group was-validated">
                <label className="form-label" for="email">Email</label>
                <input className="form-control" type="email" name="email" id="email" onChange={handleChange} required />
                <div className="invalid-feedback">
                    Please Enter Your Email Address
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" for="password">Password</label>
                <input className="form-control" type="password" name="password" id="password" onChange={handleChange} required />
                <div className="invalid-feedback">
                    Please Enter Your Password
                </div>
            </div>
            <input type="submit" className="btn btn-success w-100" value={"SIGN IN"} />
        </form>
    </div>
  )
}

export default UserLogin;