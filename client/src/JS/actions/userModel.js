import { LOAD_USERMODEL,LOGIN_USERMODEL,CURRENT_USERMODEL, LOGOUT_USERMODEL, REGISTER_USERMODEL, GET_MODELS_LOAD, GET_MODELS_FAIL, GET_MODELS_SUCCESS, GET_MODELS_FAIL_BY_ID, GET_MODELS_SUCCESS_BY_ID, GET_MODELS_LOAD_BY_ID } from "../constante/userModel"
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure()
export const registerUserModel=(userModel, history)=>async (dispatch)=> {

    dispatch ({type: LOAD_USERMODEL});
    try {
       const result = await axios.post ("/userModel/registerModel", userModel);
    //    {userModel, msg , token}
       dispatch ({type: REGISTER_USERMODEL, payload: result.data});
       history.push("/dashbord")
    } catch (error) {
      const {errors, msg}=error.response.data
      if (Array.isArray(errors)) {errors.forEach(err=>toast(err.msg));
     }
     if (msg) {toast (msg);

     }
      //  dispatch ({type: FAIL_USERMODEL, payload : error.response.data });
    }
};


export const loginUserModel=(userModel, history)=>async (dispatch)=> {

    dispatch ({type: LOAD_USERMODEL})
    try {
       const result = await axios.post ("/userModel/loginModel", userModel);
    //    {userModel, msg , token}
       dispatch ({type: LOGIN_USERMODEL, payload: result.data});
      //  localStorage.setItem("token", JSON.stringify(result.data.userModel));
       history.push("/dashbord")

    } catch (error) {
      const {errors, msg}=error.response.data
      if (Array.isArray(errors)) {errors.forEach(err=>toast(err.msg));
     }
     if (msg) {toast (msg);

     }
      //  dispatch ({type: FAIL_USERMODEL, payload : error.response.data });
    };
};


export const getModels=()=> async (dispatch) => {

     dispatch ({type : GET_MODELS_LOAD});
try {
   let result = await axios.get("/userModel/Models")
   dispatch({type : GET_MODELS_SUCCESS, payload: result.data.response})
} catch (error) {
   dispatch({type : GET_MODELS_FAIL, payload : error})
   
}
}



export const getModelsById = (idModel) => async (dispatch) => {
   dispatch({ type: GET_MODELS_LOAD_BY_ID });
   try {
     let result = await axios.get(`userModel/Models/${idModel}`
     );
     console.log("hhhhhh",result)
     dispatch({ type: GET_MODELS_SUCCESS_BY_ID, payload: result.data.response });
   } catch (error) {
     dispatch({ type: GET_MODELS_FAIL_BY_ID, payload: error });
   }
 };



 export const currentModel =()=> async (dispatch)=> {
    dispatch({type: LOAD_USERMODEL})

   const options={

      headers:{authorization:localStorage.getItem("token")  }
   }
   console.log("option",options.headers.authorization)
try {
 let result= axios.get("/userModel/currentModel", options);
 console.log("result current ",result)
//  dispatch({type: CURRENT_USERMODEL, payload: options.headers.authorization})
dispatch({type: CURRENT_USERMODEL, payload: options.headers.authorization})

   
} catch (error) {
   
}
} 


export const logout=()=>{

   return {type: LOGOUT_USERMODEL};
}