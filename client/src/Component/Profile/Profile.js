import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getModelsById } from "../../JS/actions/userModel";
import NavigationBar from "../navigationBar/NavigationBar";
import BioModel from "../modal/BioModel"
// import {Button, Linking} from "react-native";
import { Redirect } from "react-router-dom";




const Profile = ({ match }) => {
  const idModel = match.params.id;
  console.log("idModel", idModel);

  const UserModel = useSelector((state) => state.modelReducer.Models);

  console.log("UserModel", UserModel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModelsById(idModel));
  }, [match]);

  return (
    <div>

      <div className="couple" style={{ display: "flex", marginBottom:"10%" }}>
        <div className="fille">
          <div
            className="profil"
            style={{
              width: "190%",
              height: "81%",
              marginLeft: "240%",
              marginTop: "60%",
              borderWidth: "15px",
              borderStyle: "solid",
              borderColor: " rgb(109, 108, 108)",
              
            }}
          >
            <div className="biography" style={{display:"block", marginRight:"auto",marginLeft:"auto"}}>
            <h2 style={{color: "rgb(207,181,59)", textAlign:"center" ,marginBottom:"20%", marginTop:"20%"}}>{UserModel.name}</h2>
            <BioModel />
            {/* <Link to={UserModel.instagramLink}> */}
            {/* <Redirect to={UserModel.instagramLink} /> */}
            <Link href={UserModel.instagramLink} target="_blank">
          


              {/* {" "} */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
                style={{ marginTop: "2%",marginLeft:"44%", color: "rgb(207,181,59)", marginLeft:"44%", marginTop:"6%" }}
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>{" "}
            </Link>
            </div>
          </div>
        </div>

      

        <div
          className="pic"
          style={{ width: "23%", height: "40%", marginLeft: "40%" }}
        >
          <img style={{borderRadius : "0%" }}
            src={UserModel.imageLink}
            className="pic"
            alt="model"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;




// import "./Profile.css";

// import UserModel from "../UserModel/UserModel";
// import BioModel from "../modal/BioModel"
 

// import React from 'react';
// import { Link } from "react-router-dom";


// const Profile = () => {
//   return (
//     <div>
      
//       <div className="couple" style={{display:"flex"}}>
//          <div className="fille" > 
//          <div className="profil" style={{ width: "190%", height:"80%", marginLeft:"200%", marginTop:"60%", borderWidth:"15px", borderStyle:"solid", borderColor:" rgb(109, 108, 108)"}}> 
//            <h2>{UserModel.name}</h2>
//            <BioModel/>
//           <Link to="{UserModel.instagramLink}"> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16" style={{marginTop:"-4%"}}>
//              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//            </svg>  </Link>
//          </div>
//          </div>

//          <div className="pic" style= {{width:"23%", height:"40%", marginLeft: "40%"}}> 
//          <img src="https://www.industrymodels.co.uk/wp-content/uploads/2019/12/headshotanna.jpg" className="pic" alt="model" />
//          </div>
//        </div>
       

//     </div>
//   )
// }

// export default Profile
