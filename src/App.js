import React from "react";
import "./reset.css";
import "./style.css";
import Service from "./components/Service";
import Specialists from "./components/Specialists";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OUR COMPANY</h1>
      </header>
      <Service />
      <Specialists />
    </div>
  );
}

export default App;
