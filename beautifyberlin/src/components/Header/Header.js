import "./Header.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  return (
    <div className="header">
      <div className="boxinfo">
        <span className="boxid">Electric Box ID</span>
        <span className="boxAddress">Electric Box Address</span>
        <span className="status">Current status</span>
      </div>
    </div>
  );
}
