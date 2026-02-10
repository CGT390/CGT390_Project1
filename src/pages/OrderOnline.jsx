import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import { useState } from "react";
import { MENU } from "../data/menu";
import "./OrderOnline.css";

// Helper components
const PizzaGroup = ({ title, sizes, addToCart }) => (
  <div className="menu-group">
    <h3>{title}</h3>
    {sizes.map((item) => (
      <div key={item.size} className="menu-item">
        <span>{item.size}</span>
        <div className="menu-right">
          <span>${item.price.toFixed(2)}</span>
          <button onClick={() => addToCart({ name: `${title} - ${item.size}`, price: item.price })}>
            Add
          </button>
        </div>
      </div>
    ))}
  </div>
);

const DrinkGroup = ({ label, data, addToCart }) => (
  <div className="menu-group">
    <h3>{label} - ${data.price.toFixed(2)}</h3>
    {data.options.map((option) => (
      <div key={option} className="menu-item">
        <span>{option}</span>
        <button onClick={() => addToCart({ name: `${option} (${label})`, price: data.price })}>
          Add
        </button>
      </div>
    ))}
  </div>
);

const SpecialtyPie = ({ name, toppings, sizes, addToCart }) => (
  <div className="specialty-item">
    <div className="specialty-header">
      <strong>{name}</strong>
      <p className="specialty-toppings">{toppings.join(", ")}</p>
    </div>
    <div className="specialty-sizes">
      {sizes.map((size) => (
        <button
          key={size.size}
          className="size-button"
          onClick={() => addToCart({ name: `${name} - ${size.size}`, price: size.price })}
        >
          {size.size} - ${size.price.toFixed(2)}
        </button>
      ))}
    </div>
  </div>
);

const OrderOnline = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [cart, setCart] = useState([]);

  const toggleCategory = (cat) => {
    setOpenCategory(openCategory === cat ? null : cat);
  };

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Extract data from MENU
  const { justCheese, oneTopping, toppings, glutenFree } = MENU.Pizza;
  const { sizes: specialtySizes, bestSellers, columbiaFavorites } = MENU.SpecialtyPies;
  const { twoLiter, twentyOz, cans } = MENU.Beverages;

  return (
    <ContentWrapper>
      <Header text="Order Online" />

      <div className="order-layout">
        {/* Categories */}
        <section className="menu-categories">
          <h1 className="menu-title">View Our Menu</h1>

          {[
            "Pizza",
            "Specialty Pies",
            "Pokey Stix",
            "Calzones",
            "Clay Fusions",
            "Desserts",
            "Beverages",
            "Dipping Sauces"
          ].map((cat) => (
            <div key={cat} className="category-card">
              <button
                onClick={() => toggleCategory(cat)}
                className={`category-button ${openCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            </div>
          ))}
        </section>

        {/* Items panel */}
        <section className="menu-items">
          {!openCategory && (
            <p className="placeholder-text">
              Select a category to view items
            </p>
          )}

          {/* Pizza Section */}
          {openCategory === "Pizza" && (
            <div className="menu-section">
              <h2>Pizza</h2>

              {/* Just Cheese */}
              <PizzaGroup
                title={justCheese.title}
                sizes={justCheese.sizes}
                addToCart={addToCart}
              />

              {/* Cheese & 1 Topping */}
              <PizzaGroup
                title={oneTopping.title}
                sizes={oneTopping.sizes}
                addToCart={addToCart}
              />

              {/* Toppings info */}
              <div className="toppings-info">
                <h4>Available Toppings</h4>
                <p>{toppings.available.join(", ")}</p>
                <h4 style={{ marginTop: "1rem" }}>Additional Topping Prices</h4>
                <div className="topping-prices">
                  {toppings.additionalPricing.map((item) => (
                    <span key={item.size}>
                      {item.size}: ${item.price.toFixed(2)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gluten Free */}
              <div className="menu-item">
                <span>{glutenFree.description}</span>
                <div className="menu-right">
                  <span>${glutenFree.price.toFixed(2)}</span>
                  <button onClick={() => addToCart({ name: glutenFree.description, price: glutenFree.price })}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Specialty Pies Section */}
          {openCategory === "Specialty Pies" && (
            <div className="menu-section">
              <h2>Specialty Pies</h2>

              <div className="specialty-pricing">
                <h3>Pricing (All Specialty Pies)</h3>
                {specialtySizes.map((size) => (
                  <div key={size.size} className="price-item">
                    <span>{size.size}</span>
                    <span>${size.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <h3 style={{ marginTop: "2rem" }}>Best Sellers</h3>
              {bestSellers.map((pie) => (
                <SpecialtyPie
                  key={pie.name}
                  name={pie.name}
                  toppings={pie.toppings}
                  sizes={specialtySizes}
                  addToCart={addToCart}
                />
              ))}

              <h3 style={{ marginTop: "2rem" }}>Columbia Favorites</h3>
              {columbiaFavorites.map((pie) => (
                <SpecialtyPie
                  key={pie.name}
                  name={pie.name}
                  toppings={pie.toppings}
                  sizes={specialtySizes}
                  addToCart={addToCart}
                />
              ))}
            </div>
          )}

          {/* Pokey Stix Section */}
          {openCategory === "Pokey Stix" && (
            <div className="menu-section">
              <h2>Pokey Stix</h2>
              <p className="menu-subtitle">{MENU.PokeyStix.name}</p>
              <PizzaGroup
                title="Pokey Stix"
                sizes={MENU.PokeyStix.sizes}
                addToCart={addToCart}
              />
            </div>
          )}

          {/* Calzones Section */}
          {openCategory === "Calzones" && (
            <div className="menu-section">
              <h2>Calzones</h2>
              <div className="menu-item">
                <div>
                  <strong>{MENU.Calzones.name}</strong>
                  <p className="item-description">{MENU.Calzones.description}</p>
                  <p className="item-note">Additional toppings: ${MENU.Calzones.additionalToppingPrice.toFixed(2)} each</p>
                </div>
                <div className="menu-right">
                  <span>${MENU.Calzones.price.toFixed(2)}</span>
                  <button onClick={() => addToCart({ name: "Calzone", price: MENU.Calzones.price })}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Clay Fusions Section */}
          {openCategory === "Clay Fusions" && (
            <div className="menu-section">
              <h2>Clay Fusions</h2>
              <p className="menu-subtitle">{MENU.ClayFusions.description}</p>
              <PizzaGroup
                title="Clay Fusion"
                sizes={MENU.ClayFusions.sizes}
                addToCart={addToCart}
              />
            </div>
          )}

          {/* Desserts Section */}
          {openCategory === "Desserts" && (
            <div className="menu-section">
              <h2>Desserts</h2>
              {MENU.Desserts.map((item) => (
                <div key={item.name} className="menu-item">
                  <span>{item.name}</span>
                  <div className="menu-right">
                    <span>${item.price.toFixed(2)}</span>
                    <button onClick={() => addToCart(item)}>Add</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Beverages Section */}
          {openCategory === "Beverages" && (
            <div className="menu-section">
              <h2>Beverages</h2>
              <DrinkGroup label="2-Liter Bottles" data={twoLiter} addToCart={addToCart} />
              <DrinkGroup label="20 oz Drinks" data={twentyOz} addToCart={addToCart} />
              <DrinkGroup label="12 oz Cans" data={cans} addToCart={addToCart} />
            </div>
          )}

          {/* Dipping Sauces Section */}
          {openCategory === "Dipping Sauces" && (
            <div className="menu-section">
              <h2>Dipping Sauces</h2>
              <p className="menu-subtitle">Price: ${MENU.DippingSauces.price.toFixed(2)}</p>
              {MENU.DippingSauces.options.map((sauce) => (
                <div key={sauce} className="menu-item">
                  <span>{sauce}</span>
                  <button onClick={() => addToCart({ name: `${sauce} Sauce`, price: MENU.DippingSauces.price })}>
                    Add
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Cart */}
        <aside className="cart">
          <h2 className="cart-title">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="cart-empty">Cart is empty</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item, idx) => (
                  <li key={idx} className="cart-item">
                    <div className="cart-item-info">
                      <span className="cart-item-name">{item.name}</span>
                      <span className="cart-item-price">${item.price.toFixed(2)}</span>
                    </div>
                    <button 
                      className="remove-button"
                      onClick={() => removeFromCart(idx)}
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>

              <hr className="cart-divider" />

              <div className="cart-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="checkout-button">
                Checkout
              </button>
            </>
          )}
        </aside>
      </div>
    </ContentWrapper>
  );
};

export default OrderOnline;
