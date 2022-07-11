import TopBar from "./components/topbar/TopBar";
import BoxSingle from "./pages/BoxSingle/BoxSingle";
import Open from "./pages/Open/Open";
import Footer from "./components/Footer/Footer";
import Applications from "./components/Applications/Applications";
import AppliedSingle from "./pages/AppliedSingle/AppliedSingle";


import BoxSingle from "./pages/BoxSingle/BoxSingle";
function App() {
  return (
    <div className="head">
      <>
        <TopBar />
        {/* <BoxSingle /> */}
        {/* <Open /> */}
        {/* <Applications /> */}
        <AppliedSingle />
        <Footer />
      </>
    </div>
  );
}

export default App;
