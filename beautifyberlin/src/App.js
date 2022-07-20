import TopBar from "./components/topbar/TopBar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import ApplicationsPage from "./pages/ApplicationsPage/ApplicationsPage";
import BoxSingle from "./pages/BoxSingle/BoxSingle";
import NewBoxes from "./pages/NewBox/NewBoxes";
import AppliedSingle from "./pages/AppliedSingle/AppliedSingle";
import Open from "./pages/Open/Open";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  // const user = false;
  return (
    <div className="Head">
      <TopBar />
      <Routes>
        <Route path="/" exact element={<Open />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/applied/:appliedId" element={<AppliedSingle />} />
        <Route path="/upload" element={<NewBoxes />} />
        <Route path="/post/:postId" element={<BoxSingle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
