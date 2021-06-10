import { LOAD_USERMODEL, FAIL_USERMODEL,LOGIN_USERMODEL, CURRENT_USERMODEL, LOGOUT_USERMODEL, REGISTER_USERMODEL} from "../constante/userModel"


const initialState ={
userModel : null,
loadUserModel : false,
errors : null,
isAuth: false,

}; 


export const userModelReducer= (state=initialState, {type,payload})=> {

    switch (type) {
        case REGISTER_USERMODEL :
            localStorage.setItem("token",payload.token);
            return {...state, loadUserModel: false, userModel: payload.userModel, isAuth: true };

        case LOGIN_USERMODEL :
            localStorage.setItem("token",payload.token);
            return {...state, loadUserModel: false, userModel: payload.userModel, isAuth: true };

        case  LOAD_USERMODEL : 
        return {...state, loadUserModel: true }

        case  CURRENT_USERMODEL : 
        return {...state, loadUserModel: false, isAuth: true, userModel: payload }

        case  LOGOUT_USERMODEL : 
        localStorage.removeItem("token")
        return {userModel:null, loadUserModel:false, errors:null, isAuth:false };
        
        case FAIL_USERMODEL :
        return {...state, loadUserModel: false, errors : payload}




        default:
            return state;
    }
}