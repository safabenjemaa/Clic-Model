import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getModels } from "../../JS/actions/userModel";
import UserModel from "../UserModel/UserModel";
import navigationBar from "../navigationBar/NavigationBar";
// import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import SearchModal from "../modal/SearchModal";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ListModel = () => {
  const dispatch = useDispatch();
  const models = useSelector((state) => state.modelReducer.Models);
  const loadUserModel = useSelector(
    (state) => state.modelReducer.loadUserModel
  );
  console.log(models, loadUserModel);
  console.log("model--->", models);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const token = localStorage.getItem("login");
  console.log("token", token);

  console.log("formSearch.Age",formSearch.age)
  const SearchAge = formSearch.age;
  const SearchWeight= formSearch.personWeight;
  const SearchLength= formSearch.personLength;

  console.log("SearchAge,SearchWeight,SearchLength ",SearchAge,SearchWeight,SearchLength)

  useEffect(() => {
    dispatch(getModels());
  }, []);
  return (
    <div>
      <div >
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{color: "rgb(207,181,59)"}}> */}
         <p style={{color: "rgb(207,181,59)", cursor:"pointer", marginLeft:"44%"}} onClick={handleClickOpen}>Choose your Model</p> 
        {/* </Button> */}
        <Dialog style={{width:"60%"}}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" style={{color: "rgb(207,181,59)", fontSize: "150px"}}>
            {"Choose Your Model"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div>Age (ans)</div>
              <form>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="sel1"
                    name="age"
                    value={SearchAge}
                    onChange={(e) => handleChange(e)}
                  >
                    <option> </option>
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
              <div>weight (kg)</div>
              <form>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="sel1"
                    name="personWeight"
                    value={SearchWeight}
                    onChange={(e) => handleChange(e)}
                  >
                    <option> </option>
                    <option value={50}>50</option>
                    <option value={51}>51</option>
                    <option value={52}>52</option>
                    <option value={53}>53</option>
                    <option value={54}>54</option>
                    <option value={55}>55</option>
                    <option value={56}>56</option>
                    <option value={57}>57</option>
                    <option value={58}>58</option>
                    <option value={59}>59</option>
                    <option value={60}>60</option>
                  </select>
                  <br />
                </div>
              </form>

              <div>Length (Cm)</div>
              <form>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="sel1"
                    name="personLength"
                    value={SearchLength}

                    onChange={(e) => handleChange(e)}
                  >
                    <option> </option>
                    <option value={174}>174</option>
                    <option value={175}>175</option>
                    <option value={176}>176</option>
                    <option value={177}>177</option>
                    <option value={178}>178</option>
                    <option value={179}>179</option>
                    <option value={180}>180</option>
                    <option value={181}>181</option>
                    <option value={182}>182</option>
                  </select>
                  <br />
                </div>
              </form>
            </DialogContentText>
          </DialogContent>
        
        </Dialog>
      </div>

      {/* {token === null ? <Redirect to="/connexion" /> : null} */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          flexGrow: "4",
          justifyContent: "space-between",
          textDecoration: "none",
        }}
      >
        <SearchModal />
        {/* {models.map(el=><p>hhh</p>)} */}
        {loadUserModel ? (
          <h2 >Loading</h2>
        ) : (
          // models.filter((el)=> el.age>=age  && el.personLength>=personLength && el.personWeight>=personWeight)
          // models.map((el) => <UserModel key={el._id} UserModel={el} />
         
""          )}
{SearchAge !="" && models?.filter((e)=> e.age === SearchAge)?.map((el)=><UserModel key={el._id} UserModel={el} />)
||
SearchWeight !="" && models?.filter((e)=> e.personWeight === parseInt(SearchWeight))?.map((el)=><UserModel key={el._id} UserModel={el} />)
||
SearchLength !="" && models?.filter((e)=> e.personLength === parseInt(SearchLength))?.map((el)=><UserModel key={el._id} UserModel={el} />)
}


            {SearchLength =="" &&  SearchWeight == ""&& SearchAge== "" &&
            models?.map((el) => <UserModel key={el._id} UserModel={el} />)}
      </div>
    </div>
  );
};

export default ListModel;
