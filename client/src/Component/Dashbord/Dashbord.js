import React from 'react'
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom';
import {logout} from "../../JS/actions/userModel";
import PageAccueil from '../PageAccueil/PageAccueil';

const Dashbord = () => {

    const dispatch=useDispatch()
    const history=useHistory;
    return (
        <div>
            {/* <button onclick={()=> {dispatch(logout()); history.push(["/connexion","/connexionCompany"])}}>Logout</button> */}
            {/* <p>Dashbord</p> */}

            <PageAccueil/>
        </div>
    )
}

export default Dashbord
