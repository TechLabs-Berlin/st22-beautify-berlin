import "./BoxSingle.css";
import BoxImage from "../../components/BoxImage/BoxImage";
import Sidebar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";

export default function BoxSingle() {
  return (
    <>
      <div className="single">
        <Header />
        <BoxImage />
        <Sidebar />
      </div>
    </>
  );
}
