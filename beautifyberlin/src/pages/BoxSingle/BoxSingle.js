import "./BoxSingle.css";
import BoxImage from "../../components/BoxImage/BoxImage";
import Sidebar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Apply from "../../components/Apply/Apply";
import Close from "../../components/Close/Close";

export default function BoxSingle() {
  return (
    <>
      <div className="single">
        <Close />
        <Header />
        <Apply />
      </div>
    </>
  );
}
