import React from 'react';
import userCompany from '../../';
import { getCompany } from '../../JS/actions/userCompany';
import "./UserCompany.css";

const UserCompany = ({UserCompany}) => {
    return (
        <div>
        <div style={{marginBottom:"10%"}}>
<div className="card" style={{width: '18rem', border: "5px solid", width:"80%", height: "436px"}}>
  <img className="card-img-top" style={{width: "100%",height: "34%"}} src="https://we-love-new-york.com/wp-content/uploads/2013/01/skyline-new-york.jpg" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title" style= {{color: "rgb(207,181,59)", fontSize:"150%", textAlign:"center", fontWeight:"bold"}}>{UserCompany.name}</h5>
    <h4 className="card-text" style={{fontSize:"70%"}}> <h4>Adress : </h4>{UserCompany.adress}</h4>
    <h4 className="card-text" style={{fontSize:"70%"}}> <h4>Phone : </h4>{UserCompany.phone} </h4>
    <h4 className="card-text" style={{fontSize:"70%"}}> <h4>Email : </h4>{UserCompany.email} </h4>
    <p className="card-text" style={{marginLeft: "40%", marginTop : "20%", fontSize:"120%", cursor:"pointer"}}> ★★★★★</p>



  </div>
</div>

</div>
        </div>
    )
}

export default UserCompany
