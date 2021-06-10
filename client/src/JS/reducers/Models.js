import { GET_MODELS_FAIL, GET_MODELS_SUCCESS,GET_MODELS_LOAD, GET_MODELS_SUCCESS_BY_ID, GET_MODELS_LOAD_BY_ID,GET_MODELS_FAIL_BY_ID } from "../constante/userModel"


const initialState ={
Models : [],
loadUserModel : false,
errors : null,

}; 


export const modelReducer= (state=initialState, {type,payload})=> {

    switch (type) {
        case GET_MODELS_LOAD : 
        return {...state, loadUserModel: true}

        case GET_MODELS_SUCCESS : 
        return {...state, Models : payload, loadUserModel: false }

        case GET_MODELS_FAIL : 
        return {...state, loadUserModel: false, errors: payload }



        case GET_MODELS_LOAD_BY_ID : 
        return {...state, loadUserModel: true}

        case GET_MODELS_SUCCESS_BY_ID : 
        return {...state, Models : payload, loadUserModel: false }

        case GET_MODELS_FAIL_BY_ID : 
        return {...state, loadUserModel: false, errors: payload }

        default:
            return state;
    }
}