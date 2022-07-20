import "./Applypost.css";
import Applycard from "../../components/Applycard/Applycard";
import Applygrid from "../Applygrid/Applygrid";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function Applypost({ img }) {
  return (
    <Grid item xs={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
      <div className="post">
        <div class="containimg">
          <Link to="/applied/:appliedId">
            <img
              className="postImg"
              src="https://cdn.sofokleousin.gr/sites/default/files/styles/node_full/public/2019-07/street-art.jpg?itok=m1y0eyBm"
              alt=""
            />
          </Link>
          <div class="topright">Electric box</div>
        </div>
        <div className="postInfo">
          <span className="postTitle">
            <Link className="link" to="/applied/:appliedId">
              Project Title
            </Link>
          </span>
          <div className="postCats">
            <span className="postCat">Artist Name</span>
            <span className="postCat">
              District
              {/* <Link className="link" to="/posts?cat=Music">
              Life
            </Link> */}
            </span>
          </div>
        </div>
      </div>
    </Grid>
  );
}
