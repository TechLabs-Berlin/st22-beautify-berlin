import React from "react";
import PicUpload from "../../components/picupload/PicUpload";
import Emptyfield from "../../components/emptytext/textfield";

export default function NewBox() {
  return (
    <div>
      <>
        <div
          style={{
            margin: 50,
            display: "block",
            textAlign: "center",
            border: "1px solid #8242c2",
            borderRadius: "5px",
          }}
        >
          <h1>Please go through the following form:</h1>
          <PicUpload />
          <Emptyfield />
        </div>
      </>
    </div>
  );
}
