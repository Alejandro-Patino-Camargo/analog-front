import Home from "./components/home/Home.tsx";
import About from "./components/about/About.tsx";
import Learn from "./components/learn/Learn.tsx";
import Navbar from "./components/nav/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import "./global.css";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default App;
