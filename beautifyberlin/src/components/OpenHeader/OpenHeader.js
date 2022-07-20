import "./OpenHeader.css";
import Button from "@mui/material/Button";
import MapIcon from "@mui/icons-material/Map";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export default function OpenHeader() {
  return (
    <div className="openheader">
      <h2 className="pagetitle">Welcome to Beautify Berlin!</h2>
      <div className="filter-subnav-inner">
        <div className="left">
          <Button
            endIcon={<MapIcon />}
            sx={{
              backgroundColor: "#8242c2",
              boxShadow: "none",
              height: "50px",
              width: {
                xs: 420,
                sm: 400,
                md: 200,
                lg: 200,
                xl: 300,
              },
              color: "white",
              "&:hover": {
                backgroundColor: "#9e64d7",
                boxShadow: "none",
                color: "white",
              },
            }}
          >
            Map view
          </Button>
        </div>
        <div filter-categories>
          <ul className="filters">
            <li className="filterli">All</li>
            <li className="filterli">Electric Box</li>
            <li className="filterli">Wall</li>
            <li className="filterli">Tree</li>
            <li className="filterli">Other</li>
          </ul>
        </div>
        <div className="right">
          <Button
            sx={{
              backgroundColor: "white",
              color: "#8242c2",
              borderColor: "#8242c2",
              border: "solid",
              boxShadow: "none",
              height: "50px",
              width: {
                xs: 420,
                sm: 400,
                md: 200,
                lg: 200,
                xl: 300,
              },
              "&:hover": {
                backgroundColor: "#c285ff",
                boxShadow: "none",
                borderColor: "#c285ff",
                color: "white",
              },
            }}
          >
            <Link
              to="/upload"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Upload Place
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// return (
//   <Container
//     maxWidth={false}
//     sx={{
//       marginTop: 10,
//     }}
//   >
//     <Grid
//       container
//       spacing={2}
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexdirection: "row",
//       }}
//     >
//       <Button
//         item
//         xs={{ xs: 12 }}
//         variant="contained"
//         endIcon={<MapIcon />}
//         size="large"
//         sx={{
//           backgroundColor: "#8242c2",
//           boxShadow: "none",
//           width: "300px",
//           marginLeft: "40px",
//           width: {
//             xs: 420,
//             xl: 425,
//           },
//           "&:hover": {
//             backgroundColor: "#611fa3",
//             boxShadow: "none",
//           },
//         }}
//       >
//         Map view
//       </Button>
//       <Box item xs={{ xs: 12 }}>
//         <ul className="filters">
//           <li className="filterli">All</li>
//           <li className="filterlib">Electric Box</li>
//           <li className="filterli">Wall</li>
//           <li className="filterli">Tree</li>
//         </ul>
//       </Box>
//       <Button
//         item
//         xs={{ xs: 12 }}
//         variant="contained"
//         component="span"
//         sx={{
//           backgroundColor: "white",
//           color: "#8242c2",
//           borderColor: "#8242c2",
//           border: "solid",
//           boxShadow: "none",
//           width: {
//             xs: 420,
//             xl: 425,
//           },
//           marginLeft: {
//             xs: "50px",
//           },
//           marginRight: "20px",
//           "&:hover": {
//             backgroundColor: "#c285ff",
//             boxShadow: "none",
//             borderColor: "#c285ff",
//             color: "white",
//           },
//         }}
//       >
//         Upload Place
//       </Button>
//     </Grid>
//   </Container>
// );
