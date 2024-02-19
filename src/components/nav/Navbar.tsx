import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/">Analog</Link>
      </div>
      <div className="container-items">
        <div className="nav-home">
          <Link to="/">Home</Link>
        </div>

        <div className="nav-about">
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
