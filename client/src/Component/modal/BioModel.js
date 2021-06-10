import React, { useEffect } from 'react';
import Modal from "react-modal";
import { useDispatch, useSelector } from 'react-redux';
import { getModelsById } from '../../JS/actions/userModel';
import UserModel from "../UserModel/UserModel";


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const BioModel = ({match}) => {

    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "rgb(207,181,59)";
    }
  
    function closeModal() {
      setIsOpen(false); 
    }


    const UserModel = useSelector((state) => state.modelReducer.Models);

  console.log("UserModelmodallllllllllBIoo", UserModel);
  const dispatch = useDispatch();

    return (
        <div>
           <div>
        <button  style={{marginLeft:"26%", color : "grey"}} onClick={openModal}>READ BIO</button>
        <Modal style={{width:"100%", height:"100%"}}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)} style={{textAlign:"center", textTransform: 'uppercase', marginBottom:"10%" }}>{UserModel.name} {UserModel.lastName}</h2>
          <span style={{color:"rgb(109, 108, 118)", marginTop:"2%"}}>Age : </span> <h4>{UserModel.age} <spans>years</spans></h4> 
          <span style={{color:"rgb(109, 108, 118)"}}>Her length : </span> <h4>{UserModel.personLength} <spans>Cm</spans></h4>
          <span style={{color:"rgb(109, 108, 118)"}}>Her weight : </span> <h4>{UserModel.personWeight} <spans>Kg</spans></h4>
          <span style={{color:"rgb(109, 108, 118)"}}>Email : </span> <h4>{UserModel.email}</h4>
          <span style={{color:"rgb(109, 108, 118)"}}>Phone : </span> <h4>{UserModel.phone}</h4>

          {/* <button onClick={closeModal}>close</button> */}
          
        </Modal>
      </div> 
        </div>
    )
}

export default BioModel
