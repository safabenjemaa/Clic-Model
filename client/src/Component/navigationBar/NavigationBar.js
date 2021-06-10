import React from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom';
import {logout} from "../../JS/actions/userModel";
import "./navigationBar.css"
import { Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";
import { Avatar } from '@material-ui/core';



const NavigationBar = () => {

  const dispatch=useDispatch()
  const history = useHistory();

  const isAuth=localStorage.getItem("token")?.slice(7)
  console.log("isAuth",isAuth)

  const authDecripted= jwt.decode(isAuth);
  console.log("authDecripted",authDecripted)
  // function signOut () {
  //   localStorage.removeItem("token");
  //   history.push("/")


  // };

const Signout = (next)=>{
  localStorage.removeItem("token");
    history.push("/");   
}


  if (isAuth) {
      return (  
      <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" style= {{color: "rgb(207,181,59)" , fontSize:"40px", marginRight :"40px"}}>CliC Model</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          <Link style={{textDecoration:"none"}} to="/"><a class="nav-item nav-link" >Home</a></Link>
          <Link style={{textDecoration:"none"}} to="/userModel/Models"><a class="nav-item nav-link" >Models</a></Link>
          <Link style={{textDecoration:"none"}} to="/userCompany/Company"> <a class="nav-item nav-link" >Company</a></Link>
          <Link style={{textDecoration:"none"}} to="/contact"> <a class="nav-item nav-link" >Contact</a></Link>
          </div>
          </div>
      
       
      <Nav>
      <Avatar alt="Remy Sharp" src={authDecripted.imageLink} style={{marginRight :"32%", marginBottom:"10%"}} />
 
      <NavDropdown title= {authDecripted.name} style={{marginLeft:"-36%", color:"grey", textTransform: 'uppercase', marginTop:"4%"}}>
        <div style={{pointerEvents:"none" }}>
      {/* <NavDropdown.Item >{authDecripted.name}</NavDropdown.Item> */}
      <NavDropdown.Item style={{textTransform: 'lowercase'}}>{authDecripted.email}</NavDropdown.Item>
      <NavDropdown.Item>{authDecripted.phone}</NavDropdown.Item> 

      <NavDropdown.Item style={{textAlign:"center",color:"rgb(207,181,59)",fontSize:"bold",pointerEvents:"auto" }}>
      <button onClick={() => {
                Signout(() => {
                      

                  //   toast.error("Signout Successfully");
                  history.push("/");
                });
              }}>Logout</button>
      {/* <button>Logout</button> */}
      <Redirect to="/" />

      </NavDropdown.Item>

      </div>
      </NavDropdown> 
      </Nav>
      {/* const = new type(arguments); */}
      </nav>
          </div>
)
  }
  else {  
  return (  
  <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" style= {{color: "rgb(207,181,59)" , fontSize:"40px", marginRight :"40px"}}>CliC Model</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <Link style={{textDecoration:"none"}} to="/"><a class="nav-item nav-link" >Home</a></Link>
    <Link style={{textDecoration:"none"}} to="/userModel/Models"><a class="nav-item nav-link" >Models</a></Link>
    <Link style={{textDecoration:"none"}} to="/userCompany/Company"> <a class="nav-item nav-link" >Company</a></Link>
    <Link style={{textDecoration:"none"}} to="/contact"> <a class="nav-item nav-link" >Contact</a></Link>
    </div>
    
 
    <form className="form-inline" className="bot" style={{marginLeft:"70%"}}>
            <a className="btn btn-sm btn-outline-secondary" style={{ fontSize:"14px", borderColor:"rgb(109, 108, 108)",marginRight: "6px"}} type="button" href="/connexion">connexion Model</a>
            <a className="btn btn-sm btn-outline-secondary" style={{ fontSize:"14px", borderColor:"rgb(109, 108, 108)"  }} type="button"href="/connexionCompany">connexion Company</a>
          </form> 
   
  </div>
</nav>
</div>
 )
};
  
};

export default NavigationBar;
