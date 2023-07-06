import React, { useState } from 'react'
import Navbar from '../component/navbar'
import axios from 'axios'
import { taskUpdate } from '../Redux/action'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
const UpadateTask = () => {
    const {id}=useParams()
    let data=JSON.parse(localStorage.getItem('user_detail'))
    console.log(data.token)
    const dispatch = useDispatch();
    const [task,setTask]=useState({})
   
    const handleChange=(e)=>{
        const {name,value}=e.target

        setTask({
            ...task,
            [name]:value
        })
    }
    
    const handleSubmit= (e)=>{
        e.preventDefault();
       dispatch(taskUpdate(id,task))
    }
  return (
    <div>
        <Navbar/>
        <div className="login">
        <h1 className="text-center">Update Task</h1>
        <form action=""  onSubmit={handleSubmit}>
            <div className="form-group ">
                <label className="form-label" >Title</label>
                <input className="form-control"  name="title"  onChange={handleChange} required />
               
            </div>
            <div className="form-group ">
                <label className="form-label">Description</label>
                <input className="form-control"  name="description"  onChange={handleChange} required />
                
            </div>
            <div className="form-group ">
                <label className="form-label" >Due Date</label>
                <input className="form-control"  name="due_date"  onChange={handleChange} required />
               
            </div>
            <div className="form-group ">
                <label className="form-label" >Status</label>
                <input className="form-control"  name="status"  onChange={handleChange} required />
                
            </div>
            <div className="form-group">
                <select className="form-select" name="assigned_user" onChange={handleChange} aria-label="Default select example">
                        <option  >Assigne-User</option>
                        <option value="Shreya">Shreya</option>
                        <option value="Ravi">Ravi</option>
                        <option value="Ganesh">Ganesh</option>
                        <option value="Chetan">Chetan</option>
                        <option value="Revati">Revati</option>
                </select>
            </div>
                
            <input type="submit" className="btn btn-success w-100" value={"UPDATE"} />
        </form>
    </div>
    </div>
  )
}

export default UpadateTask