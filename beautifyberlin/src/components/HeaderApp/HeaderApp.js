import "./HeaderApp.css";
import CloseIcon from "@mui/icons-material/Close";

export default function HeaderApp() {
  return (
    <div className="header">
      <div className="boxinfo">
        <span className="boxid">Project Title</span>
        <span className="boxAddress">Artist Name</span>
        <span className="status">Electric Box, District</span>
      </div>
    </div>
  );
}
