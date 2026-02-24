import ContentWrapper from "../components/ContentWrapper";
import './Home.css';

const Home = () => {
  return (
    <ContentWrapper>
      <div className="home-hero">
        <p className="home-hero-eyebrow">Columbia, Missouri</p>
        <h1 className="home-hero-title">
          Gumby's<br /><span>Pizza</span>
        </h1>
        <p className="home-hero-text">
          A late-night Columbia tradition for over ten years. We're a privately owned pizza shop
          bringing you delicious pizza and great value — the only Gumby's in Missouri.
        </p>
        <div className="home-cta-group">
          <a href="https://gumbyscolumbia.com/order-online/" className="home-btn-primary">
            Order Now
          </a>
          <a href="tel:15738748629" className="home-btn-secondary">
            📞 573-874-8629
          </a>
        </div>
      </div>

      <div className="home-grid">
        <div className="home-card">
          <p className="home-card-label">Hours</p>
          <h2 className="home-card-title">Visit Us</h2>
          <div className="home-hours-row">
            <span className="home-hours-day">Sunday</span>
            <span>12:00 pm – 11:00 pm</span>
          </div>
          <div className="home-hours-row">
            <span className="home-hours-day">Mon – Thu</span>
            <span>10:00 am – 12:00 am</span>
          </div>
          <div className="home-hours-row">
            <span className="home-hours-day">Friday</span>
            <span>10:00 am – 1:00 am</span>
          </div>
          <div className="home-hours-row">
            <span className="home-hours-day">Saturday</span>
            <span>11:00 am – 1:00 am</span>
          </div>
        </div>

        <div className="home-card">
          <p className="home-card-label">Location</p>
          <h2 className="home-card-title">Find Us</h2>
          <p>1201 East Broadway<br />Columbia, MO 65201</p>
          <p style={{ marginTop: '1rem' }}>
            <a href="tel:15738748629">573-874-8629</a>
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <a href="https://gumbyscolumbia.com/order-online/" style={{ fontWeight: 700 }}>
              Order online or via DoorDash →
            </a>
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Home;