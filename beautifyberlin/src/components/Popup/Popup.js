import React from "react";
import "./Popup.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Go back to homepage
        </button>
        <CheckCircleIcon style={{ color: "#77cf55", fontSize: "40px" }} />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
