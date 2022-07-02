import TopBar from "./components/topbar/TopBar";
import NewBox from "./components/newbox/NewBox";
import BoxSingle from "./BoxSingle/Boxsingle";

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
