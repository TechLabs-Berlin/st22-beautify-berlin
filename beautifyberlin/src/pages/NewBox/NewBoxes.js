import React from "react";
import PicUpload from "../../components/picupload/PicUpload";
import Emptyfield from "../../components/emptytext/textfield";
import "./NewBoxes.css";

export default function NewBox() {
  return (
    <div>
      <>
        <div style={{ marginLeft: 30, marginTop: 40 }}>
          <h1 className="text1">
            Submit a new place that someone could Beautify
          </h1>
          <h3 className="text2">Upload an image of the box:</h3>
          <PicUpload />
          <h3 className="text2">Please go through the following form:</h3>
          <Emptyfield />
        </div>
      </>
    </div>
  );
}
