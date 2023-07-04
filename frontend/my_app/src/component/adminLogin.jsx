import React, { useState } from 'react'
import './style/login.css'
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const email="admin@gmail.com";
    const password="admin@gmail.com";

    const [admin,setAdmin]=useState({})
    const navigate = useNavigate()

    const handleChange=(e)=>{
         const {name,value}=e.target;

         setAdmin({
            ...admin,
            [name]:value
         })
    }
  
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(email == admin.email && password==admin.password){
            alert('Log In Successfully')
            navigate('/admin/dashboard')
        }else{
            alert('Wrong Credential')
        }
    }
  return (
    <div class="login">
        <h1 class="text-center">Admin LogIn</h1>
        <form action="" class="validation" onSubmit={handleSubmit}>
            <div class="form-group was-validated">
                <label class="form-label" for="email">Email</label>
                <input class="form-control" type="email" name="email" id="email" onChange={handleChange} required />
                <div className="invalid-feedback">
                    Please Enter Your Email Address
                </div>
            </div>
            <div class="form-group was-validated">
                <label class="form-label" for="password">Password</label>
                <input class="form-control" type="password" name="password" id="email" onChange={handleChange} required />
                <div className="invalid-feedback">
                    Please Enter Your Password
                </div>
            </div>
            <input type="submit" class="btn btn-success w-100" value={"SIGN IN"} />
        </form>
    </div>
  )
}

export default AdminLogin