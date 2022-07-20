import "./SideBar.css";
import Applycard from "../../components/Applycard/Applycard";
import Applygrid from "../Applygrid/Applygrid";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <button className="applybtn">
          <Link className="link" to="/uploadapply">
            Beautify this
          </Link>
        </button>
      </div>
      <p className="explain">
        What's your beautifying idea? You can submit it here. Viewers then vote
        for the best one. Would you take the challenge?
      </p>
      <hr />
      <span className="applied">Already applied for this</span>
      <Applygrid />
    </div>
  );
}
