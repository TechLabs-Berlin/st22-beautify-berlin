import TopBar from "./components/topbar/TopBar";
import NewBox from "./components/newbox/NewBox";

import BoxSingle from "./pages/BoxSingle/BoxSingle";
function App() {
  return (
    <div className="head">
      <>
        <TopBar />
        <BoxSingle />
      </>
    </div>
  );
}

export default App;
