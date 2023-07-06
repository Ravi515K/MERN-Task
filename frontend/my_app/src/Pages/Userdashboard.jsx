import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import { useDispatch } from 'react-redux'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import { getTaskData, taskDelete } from '../Redux/action';
import { useSelector } from 'react-redux';

const Userdashboard = () => {
  let task = useSelector((store) => store.task)
  console.log(task)
  const dispatch = useDispatch()

  const handleEdit = () => {

  }

  const handleDelete = (data) => {

    //  console.log(data)
    dispatch(taskDelete(data))
  }
  useEffect(() => {
    dispatch(getTaskData())

  }, [])
  return (
    <div>
      <Navbar />
      <h1 className="text-center my-5">UserDashBoard</h1>
      <div id="table">

        <table class="table table-sm">

          <thead>
            <tr className="table-warning">
              <th scope="col">Sr.No</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Due Date</th>
              <th scope="col">Status</th>
              <th scope="col">Assigned User</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              task?.map((el, i) => {
                return (
                  <tr key={el.id} class="table-success ">
                    <th scope="row">{i + 1}</th>
                    <td>{el.title}</td>
                    <td>{el.description}</td>
                    <td>{el.due_date}</td>
                    <td>{el.status}</td>
                    <td>{el.assigned_user}</td>
                    <td onClick={handleEdit(el)}>{<FaEdit />}</td>
                    <td onClick={() => handleDelete(el)}>{< RiDeleteBinLine />}</td>
                  </tr>
                )

              })
            }


          </tbody>
        </table>
      </div>

    </div>


  )
}

export default Userdashboard