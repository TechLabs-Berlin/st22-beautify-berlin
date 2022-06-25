import React from 'react'

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">Beautify Berlin</div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">Open Projects</li>
          <li className="topListItem">Hall of fame</li>
          <li className="topListItem">About us</li>
        </ul>
      </div>
      <div className="topRight">
        <i className="topIcon fa-solid fa-pen-to-square"></i>
        <i className="topIcon fa-solid fa-arrow-right-to-bracket"></i>
      </div>
    </div>
  )
}
