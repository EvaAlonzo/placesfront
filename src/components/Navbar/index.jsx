import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import user from "../../Images/User.png"
import favorite from "../../Images/Fav.png"
import logout from "../../Images/Logout.png"
import ICI from "../../Images/ICI.png"

const Navbar = (props) => {
  return (
    <nav>
      <Link to={PATHS.HOME} className="nav__projectName">
        <img src={ICI} alt="iconsnav-ici" className="imgICI"/>
      </Link>

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.USER} className="authLink">
              <img src={user} alt="iconsnav-user"/>
            </Link>
            <Link to={PATHS.FAVORITES} className="authLink">
              <img src={favorite} alt="iconsnav-fav"/>
            </Link> 
            
            <Link to={PATHS.LOGOUT} className="authLink">
              <img src={logout} alt="iconsnav-logout"/>
            </Link> 
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;