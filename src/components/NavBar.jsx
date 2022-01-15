import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link className="new" to="/">
        New Register
      </Link>
      <Link className="user-anchor" to="/user">
        Registered User
      </Link>
    </div>
  );
};

export default NavBar;
