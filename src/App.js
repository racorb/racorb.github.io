import "./App.css";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ScrollUp from "./components/ScrollUp";
import Service from "./components/Service";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <main id="main">
        <About />
        <Service />
        <Portfolio />
        <FAQ />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
