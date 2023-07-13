import React from "react";
import "./App.css";
import "./assets/js/script";
import Header from "./components/Header/Header";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Features from "./components/Features/Features";
import Packages from "./components/Packages/Packages";
import Projects from "./components/Projects/Projects";
import Teams from "./components/Teams/Teams";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App">
      <Header />
      <WhatWeDo />
      <Features />
      <Packages />
      <Projects />
      <Teams />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
