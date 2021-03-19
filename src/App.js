import React from "react";
//components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      {/* <h1>GameBuzz</h1> */}
      <Home />
    </div>
  );
}

export default App;
