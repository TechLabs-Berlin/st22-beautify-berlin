import TopBar from "./components/topbar/TopBar";
import Changestatus from "./pages/ChangeStatus/Changestatus";

import BoxSingle from "./pages/BoxSingle/BoxSingle";
function App() {
  return (
    <div className="head">
      <>
        <TopBar />
        <Changestatus />
      </>
    </div>
  );
}

export default App;
