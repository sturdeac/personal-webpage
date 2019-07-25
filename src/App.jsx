import React from "react";
import Splash from "./components/Splash";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div>
      <Splash />
      <div class="content">
        <Experience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
