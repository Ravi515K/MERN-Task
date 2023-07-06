import React, { useState } from 'react'
import './style/login.css'

const AdminLogin = () => {
    

    const handleChange=(e)=>{
         const {name,value}=e.target;

         
    }
  
    const handleSubmit=(e)=>{
        e.preventDefault();

        
    }
  return (
    <div className="login">
        <h1 className="text-center">Admin LogIn</h1>
        <form action="" className="validation" onSubmit={handleSubmit}>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-control" type="email" name="email" onChange={handleChange} required />
                <div className="invalid-feedback">
                    Please Enter Your Email
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password"  onChange={handleChange} required />
                <div className="invalid-feedback">
                    Please Enter Your Password
                </div>
            </div>
            <input type="submit" className="btn btn-success w-100" value={"SIGN IN"} />
        </form>
    </div>
  )
}

export default AdminLogin