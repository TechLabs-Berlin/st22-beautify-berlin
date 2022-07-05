import React from "react";
import "./Applycard.css";

export default function Applycard({ title, imageUrl, artist }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="imgdim" src={imageUrl} alt="Flash" />
      </div>
      <div className="card-title">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="artist">
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
}
