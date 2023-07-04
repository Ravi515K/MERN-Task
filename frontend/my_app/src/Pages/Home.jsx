import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import axios from 'axios'
 
const Home = () => {
    const [task,setTask]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/task")
        .then((res)=>{
            console.log(res)
            setTask(res)
        }).catch((err)=>{
            console.log(err)
        })

    },[])
  return (
    <div>
        <Navbar />
        <h1 class="text-center mt-3">Home Page</h1>

        <div>

        </div>
    </div>
  )
}
export default Home
