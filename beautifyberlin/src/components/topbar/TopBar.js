import React, { useState } from "react";
import "./TopBar.css";
import { Link, NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";

export default function TopBar() {
  const [navLinkOpen, navLinkToggle] = useState(false);
  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes = "topList";
    if (navLinkOpen) {
      classes += " active";
    }
    return classes;
  };

  return (
    <div className="top">
      <Link className="topLeft" to="/">
        Beautify Berlin
      </Link>
      <div className="mainnav">
        <div className="topCenter">
          <ul className={renderClasses()}>
            <li className="topListItem">
              <NavLink className="link" to="/" activeClassName="active">
                Open
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink
                to="/Applications"
                className="link"
                activeClassName="active"
              >
                Applications
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/AboutUs" className="link" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink
                to="/ownerlogin"
                className="link"
                activeClassName="active"
              >
                Owner Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="account">
          <NavLink to="/login" className="link" activeClassName="active">
            <span className="accountchild">My Account</span>
          </NavLink>
        </div>
      </div>
      <div onClick={handleNavLinksToggle} className="topRight">
        <i className="topIcon fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
