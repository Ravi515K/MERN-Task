import React, { useState } from 'react'
import Navbar from '../component/navbar'
import axios from 'axios'
const TaskCreate = () => {
    const [task,setTask]=useState({})
   
    const handleChange=(e)=>{
        const {name,value}=e.target

        setTask({
            ...task,
            [name]:value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.post("http://localhost:8080/taske/create",task)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <Navbar/>
        <div class="login">
        <h1 class="text-center">Create Task</h1>
        <form action=""  onSubmit={handleSubmit}>
            <div class="form-group ">
                <label class="form-label" >Title</label>
                <input class="form-control"  name="title"  onChange={handleChange} required />
               
            </div>
            <div class="form-group ">
                <label class="form-label">Description</label>
                <input class="form-control"  name="description"  onChange={handleChange} required />
                
            </div>
            <div class="form-group ">
                <label class="form-label" >Due Date</label>
                <input class="form-control"  name="due_date"  onChange={handleChange} required />
               
            </div>
            <div class="form-group ">
                <label class="form-label" >Status</label>
                <input class="form-control"  name="status"  onChange={handleChange} required />
                
            </div>
            <div class="form-group">
                <select class="form-select" name="assigned-user" onChange={handleChange} aria-label="Default select example">
                        <option  >Assigne-User</option>
                        <option value="Shreya">Shreya</option>
                        <option value="Ravi">Ravi</option>
                        <option value="Ganesh">Ganesh</option>
                        <option value="Chetan">Chetan</option>
                        <option value="Revati">Revati</option>
                </select>
            </div>
                
            <input type="submit" class="btn btn-success w-100" value={"CREATE"} />
        </form>
    </div>
    </div>
  )
}

export default TaskCreate