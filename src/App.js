import React from "react";
import "./reset.css";
import "./style.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Specialists from "./components/Specialists";
import Service from "./components/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LandingSection />
        <Specialists />
        <Service />
      </main>
      <Footer />
    </div>
  );
}

export default App;
