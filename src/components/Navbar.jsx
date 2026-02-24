import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Make sure logo.png is in src/assets
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/">
          <img src={logo} alt="Gumby's Pizza Logo" className="navbar-logo" />
        </NavLink>
        <div className="navbar-brand">Gumby's Pizza</div>
      </div>

      <ul className="navbar-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/order">Order Online</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/apply">Apply</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;