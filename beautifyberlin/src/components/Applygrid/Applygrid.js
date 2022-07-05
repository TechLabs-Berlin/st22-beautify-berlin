import React from "react";
import Applycard from "../../components/Applycard/Applycard";
import "./Applygrid.css";

export default function Applygrid() {
  return (
    <>
      <div className="grid">
        <div className="Post">
          <Applycard
            title="Beautiful Berlin"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0vzYSduw7o2Vk5QGYFDrOUbukYG7UJ_S7sw&usqp=CAU"
            artist="Bansky"
          />
        </div>
        <div className="Post">
          <Applycard
            title="Seumestraße"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rocvT00qqgUFib0ggRPXAI13mimEfRXW8A&usqp=CAU"
            artist="Bansky"
          />
        </div>
      </div>
    </>
  );
}
