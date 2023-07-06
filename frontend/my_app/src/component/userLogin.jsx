import React, { useEffect, useState } from 'react'
import '../style/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { AdminLogIn, UserLogIn } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
const UserLogin = () => {
    const location = useLocation();
   // console.log("loc",location)
    const from = location.state ? location.state : null;
  
    const email="admin@gmail.com";
    const password="adminPass123";

    const navigate = useNavigate()
    const dispatch=useDispatch()
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

            try{
               
                    axios.post("http://localhost:8080/user/login",data)
                        .then(res=>{
                            console.log(res,"reson")
                           
                           if(res.data){
                            
                                alert("Login Succesfully")
                                localStorage.setItem("user_detail",JSON.stringify(res.data))

                                dispatch(UserLogIn(res.data.token))
                              
                                if (from) {
                                    
                                    navigate(from.pathname);
                                } else {
                                    
                                    navigate("/");
                                }
                                
                            }else{
                                alert("Wrong Credential")
                            }

                        }).catch(err=>{
                            console.log(err)
                        })
                
           
            }catch(err){
                console.log("err",err)
            }
            
            
    }
  return (
    <div className="login">
        <h1 className="text-center"> Log In</h1>
        <form  className="validation" onSubmit={handleSubmit}>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-control" type="email" name="email" id="email" onChange={handleChange} required />
                <div className="invalid-feedback">
                    Please Enter Your Email
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" htmlFor="password">Password</label>
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