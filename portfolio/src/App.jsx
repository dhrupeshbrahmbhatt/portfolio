import React, { useState } from "react";
import "./App.css";
import "./index";
import { Navbar } from "../src/components/Navbar";
import { Hero_section } from "../src/components/hero_section";
import { About } from "../src/components/about";
import { Contact } from "../src/components/contact";
import { Work } from "../src/components/work";

function App() {
  return (
    <div className="contanier">
        <Navbar />
        <Hero_section />
        <About />
        <Work />
        <Contact /> 
    </div>
  );
}

export default App;