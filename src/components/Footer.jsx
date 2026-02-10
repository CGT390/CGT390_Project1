import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-phone">
          <a href="tel:15738748629">573-874-8629</a>
        </p>
        <p className="footer-address">
          1201 East Broadway<br />
          Columbia, MO 65201
        </p>
        <div className="footer-links">
          <a href="https://gumbyscolumbia.com/">Home</a>
          <a href="https://gumbyscolumbia.com/menu/">Menu</a>
          <a href="https://gumbyscolumbia.com/order-online/">Order Online</a>
          <a href="https://order.online/business/gumbys-pizza-206654">DoorDash</a>
          <a href="https://gumbyscolumbia.com/contact/">Contact</a>
        </div>
        <p className="footer-copyright">
          © 2026 Gumby's Pizza Columbia, MO
        </p>
      </div>
    </footer>
  );
};

export default Footer;
