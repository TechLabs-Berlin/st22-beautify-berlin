import "./Close.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

export default function Close() {
  const navigate = useNavigate();
  return (
    <div className="close">
      <button className="btn" onClick={() => navigate(-1)}>
        <span className="closechild">Close</span>
        <CloseIcon className="closechild" fontSize="large" />
      </button>
    </div>
  );
}
