import React from 'react'
import { Link } from 'react-router-dom'
import "./UserModel.css"

const UserModel = ({UserModel}) => {
    console.log("USERModel",UserModel)
    return (

      
<div > 
<navigationBar/>

<div className="flip-card-container" >
  <div className="flip-card">
    <div className="card-front">
      <figure>
        <div className="img-bg" />
        <img src={UserModel.imageLink} alt="Model" />
      </figure>

      <ul >
        <li style={{color:"rgb(207,181,59)", marginTop:"-142%",marginLeft:"80%", padding: "16px 32px"}}>★★★★★</li>
      </ul>
    </div>
    <div className="card-back">
      <figure>
        <div className="img-bg" />
        <img src={UserModel.imageLink} alt="Model" />
      </figure>
      
      <ul >
        <li style={{color:"rgb(207,181,59)", marginTop:"180%", padding: "16px 32px"}}>{UserModel.personLength} // {UserModel.personWeight}</li>
        <li></li>
      </ul>

    </div>
      
    </div>
    <Link to={`/${UserModel._id}`} style={{textDecoration:"none"}}>
    <span  style={{color:"rgb(207,181,59)", textDecoration:"none", marginBottom:"4%"}}>{UserModel.name} </span>
</Link>
  </div>


</div>
        
    )
}

export default UserModel
