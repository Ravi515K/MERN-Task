import * as types from './actionType'
const initialState={
    error:false,
    loading:false,
    task:[],
    user:{},
   

}

export const reducer = (state = initialState,{type,payload})=>{
   
    switch(type){
        case types.Admin_Login:
            return {
            ...state,
            AdminAuth:true
        }
        case types.User_Login:
            return {
            ...state,
            UserAuth:true,
            token:payload
        }   
        case types.LOGOUT:
            return {
            ...state,
            UserAuth:false,
            AdminAuth:false
        } 
        case types.Task_Get_Data_Loading:
            return{
                ...state,
                loading:true
            }
        case types.Task_Get_Data_Error:
            return {
                ...state,
                loading:false,
                error:true
            }
        case types.Task_Get_Data_Success:
            return {
                ...state,
                loading:false,
                error:false,
                task:payload
            }
           
            case types.Task_Delete_Data: {
                return {
                    ...state,
                    task:[...state.task.filter((el)=>el.id !==payload)]
                }
            }

            case types.Task_Update_Data: {
                return {
                    ...state,
                    task:[...state.task.map((el)=>{
                        if(el.id === payload.id){
                            return payload
                        }
                        return el
                    })]
                }
            }
        default :{
            return state
        }
    }
}