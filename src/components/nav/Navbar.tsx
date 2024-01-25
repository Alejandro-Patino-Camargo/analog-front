import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="container-items">
        <div className="nav-about">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-learn">
          <Link to="/learn">Learn</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
