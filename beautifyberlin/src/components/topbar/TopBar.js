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
          </ul>
        </div>
        <div className="account">
          <span className="accountchild">Account</span>
          <Avatar
            sx={{ width: 50, height: 50 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>
      <div onClick={handleNavLinksToggle} className="topRight">
        <i className="topIcon fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
