import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Awards from "./Awards";
import Leadership from "./Leadership";
import Certificates from "./Certificates";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Education/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Awards/>
      <Leadership/>
      <Certificates/>
    </div>
  );
}

export default App;
