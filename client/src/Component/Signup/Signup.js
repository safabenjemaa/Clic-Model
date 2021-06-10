import React from 'react';
import "./Signup.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import { registerUserModel } from '../../JS/actions/userModel';
import {loginUserModel} from "../../JS/actions/userModel"
import navBar from "../navBar/navBar";
import {isAuth} from  "../../helpers/auth"
import {useHistory} from "react-router-dom";
import { Router } from 'react-router';

const Signup = () => {
  console.log("isAuth",isAuth())
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [CIN, setCIN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [personLength, setPersonLength] = useState("");
  const [personWeight, setPersonWeight] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const history= useHistory();

    return (
        
        <div>

<navBar/>
      
            <div className="ensemble">
            <div className="pic">
            <img src="http://cdn.shopify.com/s/files/1/0453/7388/2533/products/409d7d4d-9951-43ce-af49-ff2f6ba771af_6c93cea4-171f-4f30-b516-a1ff1ad7f2e8_1200x1200.jpg?v=1597948219" class="pic" alt="model" />
            </div>
        <div className="col-md-6 mx-auto p-0">
          <div className="card">
            <div className="login-box">
              <div className="login-snip"> <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Login Model</label> <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up Model</label>
                <div className="login-space">
                  <div className="login" >
                    <div className="group"> <label style={{borderStyle:"none"}} htmlFor="user" className="label">email</label> <input id="user" type="email" className="input" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /> </div>
                    <div className="group"> <label style={{borderStyle:"none"}} htmlFor="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} /> </div>
                    <div className="group"> <input style={{borderStyle:"none"}} id="check" type="checkbox" className="check" defaultChecked /> <label htmlFor="check"><span className="icon" /> Keep me Signed in</label> </div>
                    <div className="group"> <input style={{borderStyle:"none"}} type="submit" className="button" defaultValue="Sign In" onClick={()=>dispatch(loginUserModel({email,password}, history))} /> </div>
                    <div className="hr" />
                    {/* <div className="foot"> <a href="#">Forgot Password?</a> </div> */}

                  </div>
                  <div className="sign-up-form">
                    <div className="group"> <label htmlFor="user" className="label">name</label> <input id="user" type="text" className="input" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="user" className="label">last-Name</label> <input id="user" type="text" className="input" placeholder="Enter your Last-Name" onChange={(e)=>setLastName(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="user" className="label">Age</label> <input id="user" type="text" className="input" placeholder="Enter your age" onChange={(e)=>setAge(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="user" className="label">C.I.N</label> <input id="user" type="text" className="input" placeholder="Enter your C.I.N" onChange={(e)=>setCIN(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="user" className="label">Phone</label> <input id="user" type="text" className="input" placeholder="Enter your phone" onChange={(e)=>setPhone(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="pass" className="label">image-Link</label> <input id="pass" type="text" className="input" placeholder="Enter your image Link" onChange={(e)=>setImageLink(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="user" className="label">instagram-Link</label> <input id="user" type="text" className="input" placeholder="Enter your instagram Link" onChange={(e)=>setInstagramLink(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="user" className="label">person-Length</label> <input id="user" type="text" className="input" placeholder="Enter your Length" onChange={(e)=>setPersonLength(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="user" className="label">person-Weight</label> <input id="user" type="text" className="input" placeholder="Enter your Weight" onChange={(e)=>setPersonWeight(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="user" className="label">Email</label> <input id="user" type="text" className="input" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} /> </div>
                    <div className="group"> <label htmlFor="user" className="label">Date</label> <input id="user" type="text" className="input" placeholder="Enter the date" onChange={(e)=>setDate(e.target.value)} /> </div>

                    <div className="group"> <input type="submit" className="button" defaultValue="Sign Up" onClick={()=>dispatch(registerUserModel({name,lastName,age,CIN,email,password,phone,imageLink,instagramLink,personLength,personWeight,date}, history))} /> </div>
                    <div className="hr" />
                    <div className="foot"> <label htmlFor="tab-1">Already Member?</label> </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
}

export default Signup
