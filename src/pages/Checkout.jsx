import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import "./Checkout.css";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Price = item base price + $1 per topping
  const itemTotal = (item) => item.price + (item.toppings?.length || 0);
  const total = cart.reduce((sum, item) => sum + itemTotal(item), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setCart([]);
    localStorage.removeItem("cart");
    setName(""); setEmail(""); setAddress(""); setCity(""); setState(""); setZip("");
  };

  return (
    <ContentWrapper>
      <Header text="Checkout" />

      {showSuccess && (
        <div className="checkout-overlay" onClick={() => setShowSuccess(false)}>
          <div className="checkout-notification" onClick={e => e.stopPropagation()}>
            <div className="checkout-notification-icon">✓</div>
            <h3>Order Placed!</h3>
            <p>Thank you for your order! We'll begin preparing it right away.</p>
            <button className="checkout-notification-close" onClick={() => setShowSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="checkout-intro">
        <p className="checkout-intro-label">Your Order</p>
        <h2 className="checkout-intro-title">Review & Complete</h2>
        <p>Confirm your items and provide your contact & delivery information to complete your order.</p>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <section className="checkout-section">
          <h3 className="checkout-section-title">Items in Your Cart</h3>
          {cart.length === 0 ? (
            <p className="checkout-empty">
              Your cart is empty.{" "}
              <NavLink to="#/order" style={{ color: "var(--color-red)" }}>
                Go back to order
              </NavLink>
            </p>
          ) : (
            <div className="checkout-cart-items">
              {cart.map((item, idx) => (
                <div key={idx} className="checkout-cart-item">
                  <div className="checkout-cart-item-left">
                    <span className="checkout-cart-item-name">{item.name}</span>
                    {item.toppings?.length > 0 && (
                      <span className="checkout-cart-item-toppings">
                        + {item.toppings.join(', ')}
                      </span>
                    )}
                  </div>
                  <span className="checkout-cart-item-price">${itemTotal(item).toFixed(2)}</span>
                </div>
              ))}
              <div className="checkout-cart-total">
                <strong>Total:</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>
          )}
        </section>

        <section className="checkout-section">
          <h3 className="checkout-section-title">Contact & Delivery Info</h3>
          <div className="checkout-row">
            <div className="checkout-group">
              <label className="checkout-label" htmlFor="name">Full Name *</label>
              <input
                className="checkout-input"
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className="checkout-group">
              <label className="checkout-label" htmlFor="email">Email *</label>
              <input
                className="checkout-input"
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="checkout-group" style={{ marginBottom: "var(--space-md)" }}>
            <label className="checkout-label" htmlFor="address">Street Address *</label>
            <input
              className="checkout-input"
              type="text"
              id="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="checkout-row">
            <div className="checkout-group">
              <label className="checkout-label" htmlFor="city">City *</label>
              <input
                className="checkout-input"
                type="text"
                id="city"
                value={city}
                onChange={e => setCity(e.target.value)}
                required
              />
            </div>
            <div className="checkout-group">
              <label className="checkout-label" htmlFor="state">State *</label>
              <input
                className="checkout-input"
                type="text"
                id="state"
                value={state}
                onChange={e => setState(e.target.value)}
                required
              />
            </div>
            <div className="checkout-group">
              <label className="checkout-label" htmlFor="zip">ZIP Code *</label>
              <input
                className="checkout-input"
                type="text"
                id="zip"
                value={zip}
                onChange={e => setZip(e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        <div className="checkout-actions">
          <button type="submit" className="checkout-submit" disabled={cart.length === 0}>
            Place Order
          </button>
        </div>
      </form>
    </ContentWrapper>
  );
};

export default Checkout;