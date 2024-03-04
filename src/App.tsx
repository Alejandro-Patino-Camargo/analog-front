import Home from "./components/home/Home.tsx";
import About from "./components/about/About.tsx";
import Navbar from "./components/nav/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./Context.tsx";
import "./global.css";

function App() {
  return (
    <AppContextProvider>
      <div className="appContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
