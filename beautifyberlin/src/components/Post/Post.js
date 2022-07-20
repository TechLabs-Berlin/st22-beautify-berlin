import "./Post.css";
import Applycard from "../../components/Applycard/Applycard";
import Applygrid from "../Applygrid/Applygrid";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function Post({ img }) {
  return (
    <Grid item xs={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
      <div className="post">
        <Link to="/post/:postId">
          <img
            className="postImg"
            src="https://thumbs.dreamstime.com/b/high-voltage-electric-cabinet-high-voltage-electric-cabinet-town-142309865.jpg"
            alt=""
          />
        </Link>
        <div className="postInfo">
          <span className="postTitle">
            <Link className="link" to="/post/:postId">
              Electric box
            </Link>
          </span>
          <div className="postCats">
            <span className="postCat">District</span>
            <span className="postCat">Current state</span>
          </div>
        </div>
      </div>
    </Grid>
  );
}
