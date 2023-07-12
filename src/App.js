import React from "react";
import "./App.css";
import "./assets/js/script";
import Header from "./components/Header/Header";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Features from "./components/Features/Features";
import Packages from "./components/Packages/Packages";

function App() {
  return (
    <div className="App">
      <Header />
      <WhatWeDo />
      <Features />
      <Packages />
    </div>
  );
}

export default App;
