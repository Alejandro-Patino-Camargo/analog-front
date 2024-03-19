import Home from "./components/home/Home.tsx";
import About from "./components/about/About.tsx";
import Navbar from "./components/nav/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./Context.tsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
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
        <Analytics />
        <SpeedInsights />
      </div>
    </AppContextProvider>
  );
}

export default App;
