import React from "react";
import Applyformartist from "../../components/Applyformartist/Applyformartist";
import PicUploadArtist from "../../components/picuploadartist/PicUploadArtist";

export default function Artistapply() {
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
          <div>
            <h1>New beautify application</h1>
            <h3>
              Upload one draft and write a description how you want to beautify
              this electric box
            </h3>
          </div>
          <div>
            <PicUploadArtist />
            <Applyformartist />
          </div>
        </div>
      </>
    </div>
  );
}
