import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import './Home.css';

const Home = () => {
  return (
    <ContentWrapper>
      <Header text="Home" />
      <p>Welcome to Gumby's Pizza.</p>

      <div className="home-container">

        {/* Hero / Intro */}
        <section className="hero">
          <h2 className="hero-title">A Columbia, Missouri Specialty</h2>
          <p className="hero-text">
            Since we opened our doors over ten years ago, Gumby’s has become a
            late-night tradition for many. We’re a privately owned pizza shop
            that brings you delicious pizza and great value. Gumby’s only exists
            in the chillest of college towns and ours is the only location in
            Missouri! 
          </p>
        </section>

        {/* Order Section */}
        <section id="order" className="order-section">
          <h3>Order Online</h3>
          <p className="order-text">
            Call us or order through the app.
          </p>
          <a href="https://gumbyscolumbia.com/order-online/" className="btn">
            Order Now
          </a>
          <p className="phone">📞 573-874-8629</p>
        </section>

        {/* Hours & Contact */}
        <section id="contact" className="contact-section">
          <h3>Visit Us</h3>
          <p>1201 East Broadway, Columbia, MO 65201</p>
          <div className="hours">
            <h4>Hours</h4>
            <p>Sunday: 12:00pm – 11:00pm</p>
            <p>Monday – Thursday: 10:00am – 12:00am</p>
            <p>Friday: 10:00am – 1:00am</p>
            <p>Saturday: 11:00am – 1:00am</p>
          </div>
        </section>


      </div>

    </ContentWrapper>
  );
};

export default Home;
