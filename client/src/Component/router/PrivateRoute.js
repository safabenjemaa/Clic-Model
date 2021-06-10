import React from 'react';
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {

    const isAuth=localStorage.getItem("token")
    if (isAuth) {
        return <Route component= {Component} {...rest}/>;

    }
    else {  
    return <Redirect path="/connexion"/>;
}
};

export default PrivateRoute;
