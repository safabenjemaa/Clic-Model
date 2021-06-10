import { GET_COMPANY_FAIL, GET_COMPANY_SUCCESS,GET_COMPANY_LOAD, GET_COMPANY_SUCCESS_BY_ID, GET_COMPANY_LOAD_BY_ID,GET_COMPANY_FAIL_BY_ID } from "../constante/userCompany"


const initialState ={
Company : [],
loadUserCompany : false,
errors : null,

}; 


export const companyReducer= (state=initialState, {type,payload})=> {

    switch (type) {
        case GET_COMPANY_LOAD : 
        return {...state, loadUserCompany: true}

        case GET_COMPANY_SUCCESS : 
        return {...state, Company : payload, loadUserCompany: false }

        case GET_COMPANY_FAIL : 
        return {...state, loadUserCompany: false, errors: payload }



        case GET_COMPANY_LOAD_BY_ID : 
        return {...state, loadUserCompany: true}

        case GET_COMPANY_SUCCESS_BY_ID : 
        return {...state, Company : payload, loadUserCompany: false }

        case GET_COMPANY_FAIL_BY_ID : 
        return {...state, loadUserCompany: false, errors: payload }

        default:
            return state;
    }
}