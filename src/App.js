import React from "react";
import ResponsiveAppBar from "./components/Navbar";
import FindTheWay from "./components/input";

function App() {
  return (
    <div sx={{
      maxWidth: "100vw",
    }}>
      <ResponsiveAppBar />
      <br></br>
      <FindTheWay />
      <br></br>

      

    </div>
  );
}

export default App;
