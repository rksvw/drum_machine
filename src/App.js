import "./App.css";
import DrumPadComponent from "./Component/DrumPadComponent";

function App() {

  return (
    <div
      className="drum-wrapper"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8d8d8d"
      }}
    >
      <DrumPadComponent />
    </div>
  );
}

export default App;
