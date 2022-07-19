import React from "react";
import PicUpload from "../../components/picupload/PicUpload";
import Emptyfield from "../../components/emptytext/textfield";
import "./NewBoxes.css";

export default function NewBox() {
  return (
    <div>
      <>
        <div
          style={{
            margin: 30,
            display: "block",
            textAlign: "center",
            border: "1px solid #8242c2",
            borderRadius: "5px",
          }}
        >
          <h1>Please go through the following form:</h1>
          <PicUpload />
          <h3 className="text2">Please go through the following form:</h3>
          <Emptyfield />
        </div>
      </>
    </div>
  );
}
