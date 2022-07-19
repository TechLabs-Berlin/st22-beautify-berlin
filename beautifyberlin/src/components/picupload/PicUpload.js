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
    uploadBytes(imageRef, imageUpload).then(snapshot => {
      getDownloadURL(snapshot.ref).then(url => {
        setImageUrls(prev => [...prev, url]);
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
    <div>




      <Button
        onClick={uploadImage}
        variant="filled"
        component="label"
        sx={{
          color: "black",
          margin: 2,
          backgroundColor: "#d8d8d8",
        }}
      >
        <AddIcon /> Choose image
        <input
          type="file"
          onChange={event => {
            setImageUpload(event.target.files[0]);
          }}
          hidden
        />
      </Button>
      {imageUrls.map(url => {
        return <img src={url} />;
      })}
      <Button
        onClick={uploadFile}
        sx={{
          color: "white",
          margin: 2,
          backgroundColor: "#8242c2",
          paddingLeft: 10,
          paddingRight: 10,
          "&:hover": {
            backgroundColor: "#9e64d7",
          },
        }}
      >
        {" "}
        Upload
      </Button>



      <div className="AILine">
        <Button
          variant="outlined"
          component="label"
          sx={{
            color: "black",
            borderColor: "black",
            margin: 2,
            backgroundColor: "#f2deff",
            ["@media (max-width:780px)"]: {
              display: "none",
            },
          }}
        >
          <AddIcon />
          Upload a picture of any electric box
          <input type="file" hidden />
        </Button>
        <Button
          variant="outlined"
          component="label"
          sx={{
            color: "black",
            borderColor: "black",
            margin: 2,
            backgroundColor: "#f2deff",
            ["@media (min-width:780px)"]: {
              display: "none",
            },
          }}
        >
          <AddIcon />
          <input type="file" hidden />
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
            variant="outlined"
            startIcon={<PublishedWithChangesIcon />}
            sx={{
              color: "black",
              borderColor: "black",
              margin: 2,
              padding: 1,
              "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
              ["@media (max-width:780px)"]: {
                display: "none",
              },
            }}
          >
            Change status
          </Button>
          <Button
            variant="outlined"
            startIcon={<PublishedWithChangesIcon />}
            sx={{
              color: "black",
              borderColor: "black",
              margin: 2,
              padding: 1,
              "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
              ["@media (min-width:780px)"]: {
                display: "none",
              },
            }}
          ></Button>
        </div>
      </div>

    </div>
  );
}
