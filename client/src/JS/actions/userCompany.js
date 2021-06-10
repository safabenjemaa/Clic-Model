import { LOAD_USERCOMPANY, FAIL_USERCOMPANY,LOGIN_USERCOMPANY, LOGOUT_USERCOMPANY, REGISTER_USERCOMPANY, GET_COMPANY_LOAD, GET_COMPANY_FAIL, GET_COMPANY_SUCCESS, GET_COMPANY_FAIL_BY_ID, GET_COMPANY_SUCCESS_BY_ID, GET_COMPANY_LOAD_BY_ID, CURRENT_USERCOMPANY } from "../constante/userCompany"
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const registerUserCompany=(userCompany, history)=>async (dispatch)=> {

    dispatch ({type: LOAD_USERCOMPANY});
    try {
       const result = await axios.post ("/userCompany/registerCompany", userCompany);
    //    {userModel, msg , token}
       dispatch ({type: REGISTER_USERCOMPANY, payload: result.data});
       history.push("/dashbord")

    } catch (error) {
      const {errors, msg}=error.response.data
      if (Array.isArray(errors)) {errors.forEach(err=>toast(err.msg));
     }
     if (msg) {toast (msg);

     }
      //  dispatch ({type: FAIL_USERCOMPANY, payload : error.response.data });
    }
};


export const loginUserCompany=(userCompany, history)=>async (dispatch)=> {

    dispatch ({type: LOAD_USERCOMPANY})
    try {
       const result = await axios.post ("/userCompany/loginCompany", userCompany);
    //    {userModel, msg , token}
       dispatch ({type: LOGIN_USERCOMPANY, payload: result.data});
      //  localStorage.setItem("token", JSON.stringify({token :result.data}));
       history.push("/dashbord")

    } catch (error) {
      const {errors, msg}=error.response.data
      if (Array.isArray(errors)) {errors.forEach(err=>toast(err.msg));
     }
     if (msg) {toast (msg);

     }
      //  dispatch ({type: FAIL_USERCOMPANY, payload : error.response.data });
    };
};


export const getCompany=()=> async (dispatch) => {

     dispatch ({type : GET_COMPANY_LOAD});
try {
   let result = await axios.get("/userCompany/Company")
   dispatch({type : GET_COMPANY_SUCCESS, payload: result.data.response})
} catch (error) {
   dispatch({type : GET_COMPANY_FAIL, payload : error})
   
}
}


// export const getCompanyById=()=> async (dispatch) => {

//    dispatch ({type : GET_COMPANY_LOAD_BY_ID});
// try {
//  let result = await axios.get(`/userCompany/registerCompany/${req.params.id}`)
//  dispatch({type : GET_COMPANY_SUCCESS_BY_ID, payload: result.data.response})
// } catch (error) {
//  dispatch({type : GET_COMPANY_FAIL_BY_ID, payload : error})
 
// }
// }


export const currentCompany =()=> async (dispatch)=> {
   dispatch({type: LOAD_USERCOMPANY})

  const options={

     headers:{authorization:localStorage.getItem("token")  }
  }
  console.log("option",options.headers.authorization)
try {
let result= axios.get("/userCompany/currentCompany", options);
console.log("result current ",result)
dispatch({type: CURRENT_USERCOMPANY, payload: options.headers.authorization})
  
} catch (error) {
}
} 


export const logout=()=>{

   return {type: LOGOUT_USERCOMPANY};
}