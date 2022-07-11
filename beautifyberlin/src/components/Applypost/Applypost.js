import "./Applypost.css";
import Applycard from "../../components/Applycard/Applycard";
import Applygrid from "../Applygrid/Applygrid";
import Grid from "@mui/material/Grid";

export default function Applypost({ img }) {
  return (
    <Grid item xs={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
      <div className="post">
        <div class="containimg">
          <img
            className="postImg"
            src="https://cdn.sofokleousin.gr/sites/default/files/styles/node_full/public/2019-07/street-art.jpg?itok=m1y0eyBm"
            alt=""
          />
          <div class="topright">Electric box</div>
        </div>
        <div className="postInfo">
          <span className="postTitle">Project Title</span>
          <div className="postCats">
            <span className="postCat">
              Artist Name
              {/* <Link className="link" to="/posts?cat=Music">
              Music
            </Link> */}
            </span>
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
