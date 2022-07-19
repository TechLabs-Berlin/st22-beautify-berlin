import React from "react";
import PicUpload from "../../components/picupload/PicUpload";
import Emptyfield from "../../components/emptytext/textfield";
import "./NewApply.css";

export default function NewApply() {
  return (
    <div>
      <>
        <div style={{ marginLeft: 30, marginTop: 40 }}>
          <h1>Please go through the following form:</h1>
          <PicUpload />
          <Emptyfield />
        </div>
      </>
    </div>
  );
}
