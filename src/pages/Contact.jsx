import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import "./Contact.css";

const Contact = () => {
  return (
    <ContentWrapper>
      <Header text="Contact" />

      <div className="contact-grid">
        <div className="contact-card">
          <p className="contact-card-label">Get In Touch</p>
          <h2 className="contact-card-title">Reach Us</h2>
          <p>
            <a href="tel:15738748629">573-874-8629</a>
          </p>
          <p style={{ marginTop: '1rem' }}>
            1201 East Broadway<br />
            Columbia, MO 65201
          </p>
          <p style={{ marginTop: '1rem' }}>
            <a href="https://gumbyscolumbia.com/order-online/">Order online</a>
            {' '}or find us on{' '}
            <a href="https://order.online/business/gumbys-pizza-206654">DoorDash</a>.
          </p>
        </div>

        <div className="contact-card">
          <p className="contact-card-label">Hours</p>
          <h2 className="contact-card-title">We're Open</h2>
          <div className="contact-hours-row">
            <span className="contact-hours-day">Sunday</span>
            <span>12:00 pm – 11:00 pm</span>
          </div>
          <div className="contact-hours-row">
            <span className="contact-hours-day">Mon – Thu</span>
            <span>10:00 am – 12:00 am</span>
          </div>
          <div className="contact-hours-row">
            <span className="contact-hours-day">Friday</span>
            <span>10:00 am – 1:00 am</span>
          </div>
          <div className="contact-hours-row">
            <span className="contact-hours-day">Saturday</span>
            <span>11:00 am – 1:00 am</span>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Contact;