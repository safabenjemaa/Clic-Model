import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

// import { isAuth } from "../../../helpers/auth";

const navBar = () => {
  // const auth = isAuth();
  // console.log("isAuth()", isAuth());
  // console.log("auth", auth);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <h2 className="title">CliC Model</h2>
        <div className="liensNav ">
          <Link to="/">
            <h6>Home </h6>
          </Link>
          <Link to="/userModel/Models">
            <h6>Models</h6>
          </Link>
          <h6>Company</h6>
          <h6>Contact</h6>
        </div>

        
          <form class="form-inline">
            <a
              className="btn btn-sm btn-outline-secondary"
              type="button"
              href="/login"
            >
              connexion Model
            </a>
            <a
              className="btn btn-sm btn-outline-secondary"
              type="button"
              href="/connexion"
            >
              connexion Company
            </a>
          </form>
        
        
      </div>
    </nav>
  );
};

export default navBar;
