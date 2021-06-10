

import {combineReducers} from "redux";
import {userModelReducer} from "./userModel";
import {modelReducer} from "./Models";
import {userCompanyReducer} from "./userCompany";
import {companyReducer} from "./company";


export const rootReducer= combineReducers({userModelReducer,modelReducer,userCompanyReducer,companyReducer});