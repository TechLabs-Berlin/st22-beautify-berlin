import "./Post.css";
import Applycard from "../../components/Applycard/Applycard";
import Applygrid from "../Applygrid/Applygrid";
import Grid from "@mui/material/Grid";

export default function Post({ img }) {
  return (
    <Grid item xs={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
      <div className="post">
        <img
          className="postImg"
          src="https://thumbs.dreamstime.com/b/high-voltage-electric-cabinet-high-voltage-electric-cabinet-town-142309865.jpg"
          alt=""
        />
        <div className="postInfo">
          <span className="postTitle">Electric box</span>
          <div className="postCats">
            <span className="postCat">
              District
              {/* <Link className="link" to="/posts?cat=Music">
              Music
            </Link> */}
            </span>
            <span className="postCat">
              Current state
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
