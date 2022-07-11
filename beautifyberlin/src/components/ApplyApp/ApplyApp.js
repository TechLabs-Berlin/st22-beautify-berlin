import ApplyImage from "../ApplyImage/ApplyImage";
import SidebarApp from "../SidebarApp/SidebarApp";
import "./ApplyApp.css";

export default function ApplyApp() {
  return (
    <div className="apply">
      <ApplyImage />
      <SidebarApp />
    </div>
  );
}
