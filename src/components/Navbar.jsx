import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Gumby's Pizza</div>

      <ul className="navbar-links">
        <p><NavLink to="/">Home</NavLink></p>
        <p><NavLink to="/menu">Menu</NavLink></p>
        <p><NavLink to="/order">Order Online</NavLink></p>
        <p><NavLink to="/contact">Contact</NavLink></p>
        <p><NavLink to="/apply">Apply</NavLink></p>
      </ul>
    </nav>
  );
};

export default Navbar;
