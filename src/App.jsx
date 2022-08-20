import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Homepage from "./components/Homepage/Homepage";
import References from "./components/References/References";
import Sidebar from "./components/Sidebar/Sidebar";
import Works from "./components/Works/Works";
import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <div className="bubbles">
          <span className="A"></span>
          <span className="B"></span>
          <span className="C"></span>
          <span className="D"></span>
          <span className="E"></span>
          <span className="F"></span>
          <span className="G"></span>
          <span className="H"></span>
          <span className="I"></span>
          <span className="J"></span>
          <span className="K"></span>
          <span className="L"></span>
          <span className="M"></span>
          <span className="N"></span>
          <span className="O"></span>
          <span className="P"></span>
          <span className="Q"></span>
          <span className="R"></span>
          <span className="S"></span>
          <span className="T"></span>
          <span className="U"></span>
          <span className="V"></span>
          <span className="W"></span>
          <span className="X"></span>
          <span className="Y"></span>
          <span className="Z"></span>
          <span className="AA"></span>
          <span className="AB"></span>
          <span className="AC"></span>
          <span className="AD"></span>
          <span className="AE"></span>
          <span className="AF"></span>
          <span className="AG"></span>
          <span className="AH"></span>
          <span className="AI"></span>
          <span className="AJ"></span>
          <span className="AK"></span>
          <span className="AL"></span>
          <span className="AM"></span>
          <span className="AN"></span>
        </div>
      </div>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Homepage />
      <AboutMe />
      <Works />
      <References />
      <Contact />
    </div>
  );
}
