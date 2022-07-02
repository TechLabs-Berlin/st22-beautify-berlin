import "./BoxSingle.css";
import BoxImage from "../../components/BoxImage/BoxImage";
import Sidebar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Apply from "../../components/Apply/Apply";

export default function BoxSingle() {
  return (
    <>
      <div className="single">
        <Header />
        <Apply />
      </div>
    </>
  );
}
