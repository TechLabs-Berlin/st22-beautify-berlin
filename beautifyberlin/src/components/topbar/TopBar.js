import React, { useState } from "react";
import "./TopBar.css";

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
      <div className="topLeft">BeautifyBerlin</div>
      <div className="topCenter">
        <ul className={renderClasses()}>
          <li className="topListItem">Home</li>
          <li className="topListItem">Open Projects</li>
          <li className="topListItem">Hall of fame</li>
          <li className="topListItem">About</li>
        </ul>
      </div>
      <div onClick={handleNavLinksToggle} className="topRight">
        <i className="topIcon fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
