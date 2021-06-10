import { LOAD_USERCOMPANY, FAIL_USERCOMPANY,LOGIN_USERCOMPANY,CURRENT_USERCOMPANY, LOGOUT_USERCOMPANY, REGISTER_USERCOMPANY} from "../constante/userCompany"


const initialState ={
userCompany : null,
loadUserCompany : false,
errors : null,
isAuth: false,

}; 


export const userCompanyReducer= (state=initialState, {type,payload})=> {

    switch (type) {
        case REGISTER_USERCOMPANY :
            localStorage.setItem("token",payload.token);
            return {...state, loadUserCompany: false, userCompany: payload.userCompany, isAuth: true };

        case LOGIN_USERCOMPANY :
            localStorage.setItem("token",payload.token);
            return {...state, loadUserCompany: false, userCompany: payload.userCompany, isAuth: true };

        case  LOAD_USERCOMPANY : 
        return {...state, loadUserCompany: true }

        case FAIL_USERCOMPANY :
        return {...state, loadUserCompany: false, errors : payload}

        case  CURRENT_USERCOMPANY : 
        return {...state, loadUserCompany: false, isAuth: true, userCompany: payload }

        case  LOGOUT_USERCOMPANY : 
        localStorage.removeItem("token")
        return {userCompany:null, loadUserCompany:false, errors:null, isAuth:false };


        default:
            return state;
    }
}