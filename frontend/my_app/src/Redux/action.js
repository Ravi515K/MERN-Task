import axios from 'axios'
import * as types from './actionType'

const token=JSON.parse(localStorage.getItem('user_detail'))
export const AdminLogIn = ()=>(dispatch)=>{
     dispatch({type:types.Admin_Login})

}

export const UserLogIn = (token)=>(dispatch)=>{
    dispatch({type:types.User_Login,payload:token})
    
}
 // Get Task
export const getTaskData = ()=>(dispatch)=>{
    dispatch({type:types.Task_Get_Data_Loading})
    axios.get("http://localhost:8080/task")
    .then((res)=>{
         console.log(res.data)
        dispatch({type:types.Task_Get_Data_Success,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.Task_Get_Data_Error})
    })

}


export const taskDelete = (data)=>(dispatch)=>{
    console.log("data,action",data._id)
    axios.delete(`http://localhost:8080/task/delete/${data._id}`,{
        headers:{
            'Authorization':token.token
        }
    })
    .then(res => {
        console.log(res)
        window.location.reload()
         dispatch({type:types.Task_Delete_Data,payload:data._id});
      })
      .catch(error => {
        console.error(error);
      });
}

export const taskUpdate = (id,data)=>(dispatch)=>{
    console.log("update_data",id,data)
    axios.patch(`http://localhost:8080/task/update/${id}`,data,{
        
        headers:{
           
            'Content-Type': 'application/json',
            "Authorization":token.token,
        }
    })
    .then((res)=>{
        console.log(res)
        // window.location.reload()
        dispatch({type:types.Task_Update_Data,payload:res});
    }).catch((err)=>{
        console.log(err)
    })
}


