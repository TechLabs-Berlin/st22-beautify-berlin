import "./AppliedSingle.css";
import BoxImage from "../../components/BoxImage/BoxImage";
import Sidebar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Apply from "../../components/Apply/Apply";
import Close from "../../components/Close/Close";
import HeaderApp from "../../components/HeaderApp/HeaderApp";
import ApplyApp from "../../components/ApplyApp/ApplyApp";

export default function AppliedSingle() {
  return (
    <>
      <div className="single">
        <Close />
        <HeaderApp />
        <ApplyApp />
      </div>
    </>
  );
}
