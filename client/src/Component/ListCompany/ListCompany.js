import React from 'react'
import {useDispatch, useSelector} from "react-redux" ;
import {useEffect} from  "react"
import {getCompany} from "../../JS/actions/userCompany";
import UserCompany from "../UserCompany/UserCompany";
import NavigationBar from "../navigationBar/NavigationBar";


const ListCompany = () => {

    const dispatch = useDispatch();
const company = useSelector(state => state.companyReducer.Company)
const loadUserCompany = useSelector(state => state.companyReducer.loadUserCompany)
console.log(company, loadUserCompany)
// console.log("company",name)


    useEffect(() => {
        dispatch (getCompany())
    }, []);
    return (
<div>  
        {/* <div style={{display:'flex', flexWrap: 'wrap', flexDirection:'row', justifyContent:"space-between"}}> */}

        <div style={{display:"flex", justifyContent:"space-around", marginRight:"10%"}}>
            {/* {models.map(el=><p>hhh</p>)} */}
            {loadUserCompany? ( 
            <h2>Loading</h2>
            ) : (
                company.map(el=> <UserCompany key={el._id} UserCompany={el} />)
            )}
        </div>

        </div>
        );
};

export default ListCompany
