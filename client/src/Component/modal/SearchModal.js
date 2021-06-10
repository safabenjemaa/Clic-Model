import React, { useState } from "react";
import Modal from "react-modal";
import "./searchModal.css";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "29%",
    height: "38%",
    marginTop: "1%"
  },
};
const SearchModal = () => {
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

  const [formSearch, setFormSearch] = useState({
    age:"",
    personLength:"",
    personWeight:""
  })
  
  const handleChange = (e)=>{
    setFormSearch({...formSearch,[e.target.name]:e.target.value})
    console.log("e.target.name",e.target.name)
    console.log("e.target.value",e.target.value)
  }
  console.log("formSearch",formSearch)
  return (
    <div>
      <button style={{color: "rgb(207,181,59)"}} onClick={openModal}></button>
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{fontSize:"34%"}}>Choose Your Model</h2>
        {/* <button onClick={closeModal}>close</button> */}
<div className="choose" style={{display:"flex"}}> 
        <div style={{"display":"flex"}}>
          <div style={{"marginLeft":"20px"}}>
            <div className="menuDeroulant">Age (ans)</div>
            <form>
  <div className="form-group">
    <select className="form-control" id="sel1" name="age"  onChange={(e) => handleChange(e)} >
      <option>  </option>
      <option value={18}>18</option>
      <option value={19}>19</option>
      <option value={20}>20</option>
      <option value={21}>21</option>
      <option value={22}>22</option>
      <option value={23}>23</option>
      <option value={24}>24</option>
      <option value={25}>25</option>
      <option value={26}>26</option>
      <option value={27}>27</option>
      <option value={28}>28</option>
      <option value={29}>29</option>
      <option value={30}>30</option>

    </select>
    <br />
  </div>
</form>
          </div>
          <div style={{"marginLeft":"20px"}}>
            <div className="menuDeroulant">weight (kg)</div>
            <form>
  <div className="form-group">
    <select className="form-control" id="sel1" name="personWeight" onChange={(e) => handleChange(e)}>
      <option>  </option>
      <option  value={50}>50</option>
      <option  value={51}>51</option>
      <option  value={52}>52</option>
      <option  value={53}>53</option>
      <option  value={54}>54</option>
      <option  value={55}>55</option>
      <option  value={56}>56</option>
      <option  value={57}>57</option>
      <option  value={58}>58</option>
      <option  value={59}>59</option>
      <option  value={60}>60</option>

    </select>
    <br />
  </div>
</form>          
</div>
          <div style={{"marginLeft":"20px"}}>
            <div className="menuDeroulant" style={{fontSize:"200%"}}>Length (Cm)</div>
            <form>
  <div className="form-group">
    <select className="form-control" id="sel1" name="personLength"  onChange={(e) => handleChange(e)}>
      <option>  </option>
      <option  value={174}>174</option>
      <option  value={175}>175</option>
      <option  value={176}>176</option>
      <option  value={177}>177</option>
      <option  value={178}>178</option>
      <option  value={179}>179</option>
      <option  value={180}>180</option>
      <option  value={181}>181</option>
      <option  value={182}>182</option>

    </select>
    <br />
  </div>
</form>                   
 </div>
 </div>
        </div>
  <button style={{backgroundColor : "rgb(207,181,59)", color :"white", marginLeft:"68%", marginTop:"4%"}}>Validate</button>
     
     
     
      </Modal>
    </div>
  );
};

export default SearchModal;
