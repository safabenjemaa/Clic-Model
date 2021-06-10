import './App.css';
import Signup from './Component/Signup/Signup';
import {Switch, Route} from 'react-router-dom' ;
import NavBar from './Component/navBar/navBar' ;
import PageAccueil from './Component/PageAccueil/PageAccueil';
import ListModel from "./Component/ListModel/ListModel"
import Profile from './Component/Profile/Profile';
import SignupCompany from "./Component/SignupCompany/SignupCompany";
import ListCompany from "./Component/ListCompany/ListCompany";
import Contact from "./Component/Contact/Contact";
import NavigationBar from './Component/navigationBar/NavigationBar';
import Dashbord from "./Component/Dashbord/Dashbord";
import PrivateRoute from './Component/router/PrivateRoute';
import { currentModel } from './JS/actions/userModel';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

const dispatch = useDispatch();
useEffect(() => {
    dispatch(currentModel())
}, [])
  return (

    <div className="App">

<NavigationBar/>

<Switch>
<Route exact path="/" component ={PageAccueil} />;
<Route exact path="/connexion" component ={Signup} />;
<Route exact path="/connexionCompany" component = {SignupCompany} />;

{/* <PrivateRoute exact path="/dashbord" component ={Dashbord} />; */}
<PrivateRoute exact path="/dashbord" component ={PageAccueil} />;
<PrivateRoute exact path="/userModel/Models" component ={ListModel} />;
<PrivateRoute exact path="/userCompany/Company" component ={ListCompany} />;

{/* <Route exact path="/userModel/Models/model" component ={Profile} />; */}
<PrivateRoute exact path="/contact" component ={Contact} />;



<Route exact path="/:id" render={(props) => <Profile {...props} />}/>;
{/* <Route exact path="/connexion" component ={Signup} />; */}


</Switch>

    </div>
  )
}

export default App;
