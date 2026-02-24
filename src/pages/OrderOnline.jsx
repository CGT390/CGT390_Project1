import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import { useState } from "react";
import { MENU } from "../data/menu";
import "./OrderOnline.css";

// Helper components
const ItemRow = ({ name, price, meta, addToCart }) => (
  <div className="oo-group">
    <div className="oo-item">
      <div className="oo-item-left">
        <p className="oo-item-name">{name}</p>
        {meta && <p className="oo-item-meta">{meta}</p>}
      </div>
      <div className="oo-item-right">
        <span className="oo-item-price">${price.toFixed(2)}</span>
        <button className="oo-add-btn" onClick={() => addToCart({ name, price, allowToppings: true })}>
          Add
        </button>
      </div>
    </div>
  </div>
);

const PizzaGroup = ({ title, sizes, addToCart }) => (
  <div className="oo-group">
    <p className="oo-group-title">{title}</p>
    {sizes.map(item => (
      <ItemRow
        key={item.size}
        name={`${title} — ${item.size}`}
        price={item.price}
        addToCart={addToCart}
      />
    ))}
  </div>
);

const DrinkGroup = ({ label, data, addToCart }) => (
  <div className="oo-group">
    <p className="oo-group-title">{label} — ${data.price.toFixed(2)}</p>
    {data.options.map(option => (
      <ItemRow
        key={option}
        name={option}
        price={data.price}
        addToCart={addToCart}
      />
    ))}
  </div>
);

const SpecialtyPie = ({ name, toppings, sizes, addToCart }) => (
  <div className="oo-specialty-item">
    <p className="oo-specialty-name">{name}</p>
    <p className="oo-specialty-toppings">{toppings.join(', ')}</p>
    <div className="oo-size-btns">
      {sizes.map(size => (
        <button
          key={size.size}
          className="oo-size-btn"
          onClick={() => addToCart({ name: `${name} — ${size.size}`, price: size.price, allowToppings: true })}
        >
          {size.size} · ${size.price.toFixed(2)}
        </button>
      ))}
    </div>
  </div>
);

const CATEGORIES = [
  "Pizza", "Specialty Pies", "Pokey Stix", "Calzones",
  "Clay Fusions", "Desserts", "Beverages", "Dipping Sauces"
];

const OrderOnline = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [toppingItemIndex, setToppingItemIndex] = useState(null);
  // maxToppings: how many toppings the item allows. Default 1 (radio behavior).
  // You can store this per-item if needed.
  const MAX_TOPPINGS = 1;

  const addToCart = (item) => {
    setCart(prev => [...prev, { ...item, toppings: [] }]);
  };

  const removeFromCart = (index) => setCart(prev => prev.filter((_, i) => i !== index));

  const total = cart.reduce((sum, item) => sum + item.price + (item.toppings?.length || 0), 0);

  const { justCheese, oneTopping, toppings, glutenFree } = MENU.Pizza;
  const { sizes: specialtySizes, bestSellers, columbiaFavorites } = MENU.SpecialtyPies;
  const { twoLiter, twentyOz, cans } = MENU.Beverages;

  const openToppingsSelector = (index) => setToppingItemIndex(index);
  const closeToppingsSelector = () => setToppingItemIndex(null);

  const toggleTopping = (topping) => {
    setCart(prev => {
      const newCart = [...prev];
      const item = { ...newCart[toppingItemIndex] };
      const current = item.toppings || [];

      if (current.includes(topping)) {
        // Deselect
        item.toppings = current.filter(t => t !== topping);
      } else if (current.length < MAX_TOPPINGS) {
        // Select if under limit
        item.toppings = [...current, topping];
      } else {
        // At limit: replace the last selected (radio-style for MAX=1)
        item.toppings = [...current.slice(0, MAX_TOPPINGS - 1), topping];
      }

      newCart[toppingItemIndex] = item;
      return newCart;
    });
  };

  return (
    <ContentWrapper>
      <Header text="Order Online" />

      <div className="oo-layout">
        {/* Sidebar */}
        <nav className="oo-sidebar">
          <p className="oo-sidebar-title">Categories</p>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`oo-cat-btn${openCategory === cat ? ' active' : ''}`}
              onClick={() => setOpenCategory(openCategory === cat ? null : cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Items Panel */}
        <div className="oo-panel">
          {!openCategory && <div className="oo-panel-empty">Select a category to view items →</div>}

          {openCategory === "Pizza" && (
            <div className="oo-panel-section">
              <h2 className="oo-panel-heading">Pizza</h2>
              <PizzaGroup title={justCheese.title} sizes={justCheese.sizes} addToCart={addToCart} />
              <PizzaGroup title={oneTopping.title} sizes={oneTopping.sizes} addToCart={addToCart} />
              <div className="oo-info-box">
                <strong>Available Toppings</strong> {toppings.available.join(' · ')}
              </div>
              <ItemRow
                name={glutenFree.description}
                price={glutenFree.price}
                meta="Gluten-free crust option"
                addToCart={addToCart}
              />
            </div>
          )}


          {openCategory === "Specialty Pies" && (
            <div className="oo-panel-section">
              <h2 className="oo-panel-heading">Specialty Pies</h2>
              <div className="oo-group">
                <p className="oo-group-title">Best Sellers</p>
                {bestSellers.map(pie => (
                  <SpecialtyPie key={pie.name} name={pie.name} toppings={pie.toppings} sizes={specialtySizes} addToCart={addToCart} />
                ))}
              </div>
              <div className="oo-group">
                <p className="oo-group-title">Columbia Favorites</p>
                {columbiaFavorites.map(pie => (
                  <SpecialtyPie key={pie.name} name={pie.name} toppings={pie.toppings} sizes={specialtySizes} addToCart={addToCart} />
                ))}
              </div>
            </div>
          )
          }

          {openCategory === "Pokey Stix" && (
            <div className="oo-panel-section">
              <h2 className="oo-panel-heading">Pokey Stix</h2>
              <PizzaGroup title="Pokey Stix" sizes={MENU.PokeyStix.sizes} addToCart={addToCart} />
            </div>
          )
          }

          {openCategory === "Calzones" && (
            <div className="oo-panel-section">
              <h2 className="oo-panel-heading">Calzones</h2>
              <div className="oo-group">
                <ItemRow
                  name={MENU.Calzones.name}
                  price={MENU.Calzones.price}
                  meta={`${MENU.Calzones.description} · Extra toppings $${MENU.Calzones.additionalToppingPrice.toFixed(2)} each`}
                  addToCart={addToCart}
                />
              </div>
            </div>
          )
          }

          {openCategory === "Clay Fusions" && (
            <div className="oo-panel-section">
              <h2 className="oo-panel-heading">Clay Fusions</h2>
              <div className="oo-info-box">
                <strong>About Clay Fusions</strong>
                {MENU.ClayFusions.description} · Pizza includes cheese &amp; 1-topping.
              </div>
              <PizzaGroup title="Clay Fusion" sizes={MENU.ClayFusions.sizes} addToCart={addToCart} />
            </div>
          )
          }

          {openCategory === "Desserts" && (
            <div className="oo-panel-section">
              <h2 className="oo-panel-heading">Desserts</h2>
              <div className="oo-group">
                {MENU.Desserts.map(item => (
                  <ItemRow key={item.name} name={item.name} price={item.price} addToCart={addToCart} />
                ))}
              </div>
            </div>
          )
          }

          {openCategory === "Beverages" && (
            <div className="oo-panel-section">
              <h2 className="oo-panel-heading">Beverages</h2>
              <DrinkGroup label="2-Liter Bottles" data={twoLiter} addToCart={addToCart} />
              <DrinkGroup label="20 oz Drinks" data={twentyOz} addToCart={addToCart} />
              <DrinkGroup label="12 oz Cans" data={cans} addToCart={addToCart} />
            </div>
          )
          }

          {openCategory === "Dipping Sauces" && (
            <div className="oo-panel-section">
              <h2 className="oo-panel-heading">Dipping Sauces</h2>
              <div className="oo-group">
                {MENU.DippingSauces.options.map(sauce => (
                  <ItemRow
                    key={sauce}
                    name={`${sauce} Sauce`}
                    price={MENU.DippingSauces.price}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            </div>
          )
          }
        </div >

        {/* Cart */}
        <aside className="oo-cart">
          <div className="oo-cart-header">
            <h2 className="oo-cart-title">Cart</h2>
            {cart.length > 0 && (
              <span className="oo-cart-count">{cart.length} item{cart.length !== 1 ? 's' : ''}</span>
            )}
          </div>

          <div className="oo-cart-body">
            {cart.length === 0 ? (
              <p className="oo-cart-empty">Your cart is empty</p>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="oo-cart-item">
                  {/* Row 1: name + price + remove button */}
                  <div className="oo-cart-item-row">
                    <div className="oo-cart-item-info">
                      <p className="oo-cart-item-name">{item.name}</p>
                      <p className="oo-cart-item-price">
                        ${(item.price + (item.toppings?.length || 0)).toFixed(2)}
                      </p>
                      {item.toppings?.length > 0 && (
                        <p className="oo-cart-item-toppings">+ {item.toppings.join(', ')}</p>
                      )}
                    </div>
                    <button
                      className="oo-cart-remove"
                      onClick={() => removeFromCart(idx)}
                      aria-label="Remove item"
                    >×</button>
                  </div>

                  {/* Row 2: Add Toppings button (below item info) */}
                  {item.allowToppings && (
                    <button
                      className="oo-add-toppings-btn"
                      onClick={() => openToppingsSelector(idx)}
                    >
                      {item.toppings?.length > 0 ? '✏ Edit Topping' : '+ Add Topping'}
                    </button>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Toppings Overlay */}
          {toppingItemIndex !== null && (
            <div className="oo-toppings-overlay" onClick={closeToppingsSelector}>
              <div className="oo-toppings-selector" onClick={e => e.stopPropagation()}>
                <h3>Choose a Topping</h3>
                <p className="oo-toppings-hint">Select up to {MAX_TOPPINGS} topping</p>
                {toppings.available.map(topping => {
                  const isChecked = cart[toppingItemIndex]?.toppings?.includes(topping);
                  return (
                    <label key={topping} className="oo-topping-label">
                      <input
                        type="radio"
                        name="topping-pick"
                        checked={isChecked}
                        onChange={() => toggleTopping(topping)}
                      />
                      {topping}
                    </label>
                  );
                })}
                <button className="oo-toppings-done" onClick={closeToppingsSelector}>Done</button>
              </div>
            </div>
          )}

          {cart.length > 0 && (
            <div className="oo-cart-footer">
              <div className="oo-cart-total">
                <span className="oo-cart-total-label">Total</span>
                <span className="oo-cart-total-amount">${total.toFixed(2)}</span>
              </div>
              <button
                className="oo-checkout-btn"
                onClick={() => {
                  localStorage.setItem("cart", JSON.stringify(cart));
                  window.location.hash = "#/checkout";
                }}
              >
                Checkout
              </button>
            </div>
          )}
        </aside>
      </div>
    </ContentWrapper >
  );
};

export default OrderOnline;


