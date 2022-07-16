import "./App.scss";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Homepage from "./components/Homepage/Homepage";
import References from "./components/References/References";
import Sidebar from "./components/Sidebar/Sidebar";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Homepage />
      <AboutMe />
      <Works />
      <References />
      <Contact />
    </div>
  );
}

export default App;
