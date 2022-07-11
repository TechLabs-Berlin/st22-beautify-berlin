import "./Applications.css";
import BoxImage from "../../components/BoxImage/BoxImage";
import Sidebar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Apply from "../../components/Apply/Apply";
import Close from "../../components/Close/Close";
import Post from "../../components/Post/Post";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Applypost from "../Applypost/Applypost";

export default function Applications() {
  return (
    <Container maxWidth={false}>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ lg: 1, md: 2 }}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          direction: "row",
          marginTop: "50px",
        }}
      >
        <Applypost />
        <Applypost />
        <Applypost />
        <Applypost />
        <Applypost />
        <Applypost />
        <Applypost />
        <Applypost />
        <Applypost />
        <Applypost />
        <Applypost />
        <Applypost />
      </Grid>
    </Container>
  );
}
