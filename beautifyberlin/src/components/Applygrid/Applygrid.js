import React from "react";
import Applycard from "../../components/Applycard/Applycard";
import "./Applygrid.css";
import { Link } from "react-router-dom";

export default function Applygrid() {
  return (
    <>
      <div className="grid">
        <div className="Post">
          <Link to="/applied/:appliedId" className="link">
            <Applycard
              title="Beautiful Berlin"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vzYSduw7o2Vk5QGYFDrOUbukYG7UJ_S7sw&usqp=CAU"
              artist="Bansky"
            />
          </Link>
        </div>
        <div className="Post">
          <Link to="/applied/:appliedId" className="link">
            <Applycard
              title="Seumestraße"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rocvT00qqgUFib0ggRPXAI13mimEfRXW8A&usqp=CAU"
              artist="Bansky"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
