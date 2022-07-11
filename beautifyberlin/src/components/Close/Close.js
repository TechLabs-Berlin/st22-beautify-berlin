import "./Close.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Close() {
  return (
    <div className="close">
      <span className="closechild">Close</span>
      <CloseIcon className="closechild" fontSize="large" />
    </div>
  );
}
