import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";
import "./PicUpload.css";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

export default function PicUpload() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image uploaded");
    });
  };
  return (
    <div className="AILine">
      <Button
        onClick={uploadImage}
        variant="filled"
        component="label"
        sx={{
          color: "black",
          margin: 2,
          backgroundColor: "#d8d8d8",
          ["@media (max-width:780px)"]: {
            display: "none",
          },
        }}
      >
        <AddIcon /> Choose a picture of any electric box
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
          hidden
        />
      </Button>
      <Button
        onClick={uploadImage}
        variant="filled"
        component="label"
        sx={{
          color: "black",
          margin: 2,
          backgroundColor: "#d8d8d8",
          ["@media (min-width:780px)"]: {
            display: "none",
          },
        }}
      >
        <AddIcon />
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
          hidden
        />
      </Button>

      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
      <Button
        onClick={uploadFile}
        sx={{
          color: "white",
          margin: 2,
          backgroundColor: "#8242c2",
          paddingLeft: 5,
          paddingRight: 5,
          "&:hover": {
            backgroundColor: "#9e64d7",
          },
        }}
      >
        {" "}
        Upload
      </Button>

      <div>
        <div className="Implement">
          <div>We think the box is:</div>
        </div>
        <div className="Implement">
          <div>AIAIAI</div>
        </div>
      </div>

      <div className="AILine">
        <Button
          variant="filled"
          component="label"
          startIcon={<PublishedWithChangesIcon />}
          sx={{
            color: "black",
            margin: 2,
            backgroundColor: "#d8d8d8",
            padding: 1,
          }}
        >
          Change status
        </Button>
      </div>
    </div>
  );
}
