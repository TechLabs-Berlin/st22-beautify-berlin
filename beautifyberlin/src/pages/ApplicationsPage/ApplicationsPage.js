import "./ApplicationsPage.css";
import BoxImage from "../../components/BoxImage/BoxImage";
import Sidebar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Apply from "../../components/Apply/Apply";
import Close from "../../components/Close/Close";
import Post from "../../components/Post/Post";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import OpenGrid from "../../components/OpenGrid/OpenGrid";
import OpenHeader from "../../components/OpenHeader/OpenHeader";

export default function ApplicationsPage() {
  return (
    <>
      <div className="applications">
        <Applications />
      </div>
    </>
  );
}
