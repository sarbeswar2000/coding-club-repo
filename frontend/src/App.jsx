import React, { useState } from "react";

import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Heros from "./components/hero/Heros";

// import Onecommon from "./components/Onecommon";
import Footers from "./components/Footers/Footers";
import About from "./components/About/About";
function App() {

  return (
    <>
      <div className="litu">
      <Navbar></Navbar>
    <Background>
    </Background>
    <Heros></Heros>
       <About></About>
       <Footers></Footers>
      </div>
    </>
  );
}

export default App;
