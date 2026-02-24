import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import { MENU } from "../data/menu";
import './Menu.css';

const Menu = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -160;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const { justCheese, oneTopping, toppings, glutenFree } = MENU.Pizza;
  const { sizes: specialtySizes, bestSellers, columbiaFavorites } = MENU.SpecialtyPies;
  const { twoLiter, twentyOz, cans } = MENU.Beverages;

  return (
    <ContentWrapper>
      <Header text="Menu" />

      <nav className="menu-subnav" aria-label="Menu sections">
        <p className="menu-subnav-label">Jump to section</p>
        <div className="menu-subnav-buttons">
          {[
            { id: 'pizza', label: 'Pizza' },
            { id: 'specialty', label: 'Specialty Pies' },
            { id: 'sides', label: 'Sides' },
            { id: 'appetizers', label: 'Appetizers' },
            { id: 'salads', label: 'Salads' },
            { id: 'desserts', label: 'Desserts' },
            { id: 'beverages', label: 'Beverages' },
          ].map(s => (
            <button key={s.id} className="menu-subnav-btn" onClick={() => scrollToSection(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {/* Just Cheese */}
        <section id="pizza" className="menu-section">
          <h2 className="menu-section-heading">{justCheese.title}</h2>
          <table className="menu-table">
            <tbody>
              {justCheese.sizes.map((item, i) => (
                <tr key={i}>
                  <td className="col-size">{item.size}</td>
                  <td>Cheese</td>
                  <td className="col-price">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* One Topping */}
          <h3 className="menu-subsection-heading">{oneTopping.title}</h3>
          <table className="menu-table">
            <tbody>
              {oneTopping.sizes.map((item, i) => (
                <tr key={i}>
                  <td className="col-size">{item.size}</td>
                  <td>Cheese &amp; 1-Topping</td>
                  <td className="col-price">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="menu-small-heading">Available Toppings</p>
          <div className="menu-toppings-grid">
            {toppings.available.map(t => (
              <span key={t} className="menu-topping-chip">{t}</span>
            ))}
          </div>

          <p className="menu-note">
            <strong>Additional toppings:</strong>{' '}
            {toppings.additionalPricing.map((item, i) => (
              <span key={i}>
                {item.size} ${item.price.toFixed(2)}
                {i < toppings.additionalPricing.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
          <p className="menu-note">*{glutenFree.description} — ${glutenFree.price.toFixed(2)}</p>
          <p className="menu-note">*Ranch available upon request for ${MENU.DippingSauces.price.toFixed(2)}</p>
        </section>

        <hr className="menu-divider" />

        {/* Specialty Pies */}
        <section id="specialty" className="menu-section">
          <h2 className="menu-section-heading">Specialty Pies</h2>
          <table className="menu-table">
            <tbody>
              {specialtySizes.map((item, i) => (
                <tr key={i}>
                  <td className="col-size">{item.size}</td>
                  <td></td>
                  <td className="col-price">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="menu-subsection-heading">Best Sellers</h3>
          {bestSellers.map((item, i) => (
            <div key={i} className="menu-item-card">
              <p className="menu-item-name">{item.name}</p>
              <p className="menu-item-desc">{item.toppings.join(', ')}</p>
            </div>
          ))}

          <h3 className="menu-subsection-heading">Columbia Favorites</h3>
          {columbiaFavorites.map((item, i) => (
            <div key={i} className="menu-item-card">
              <p className="menu-item-name">{item.name}</p>
              <p className="menu-item-desc">{item.toppings.join(', ')}</p>
            </div>
          ))}

          <h3 className="menu-subsection-heading">Pokey Stix</h3>
          <p className="menu-item-desc">{MENU.PokeyStix.name}</p>
          <table className="menu-table">
            <tbody>
              {MENU.PokeyStix.sizes.map((item, i) => (
                <tr key={i}>
                  <td className="col-size">{item.size}</td>
                  <td></td>
                  <td className="col-price">${item.price.toFixed(2)}{i > 0 ? '*' : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="menu-subsection-heading">Calzones</h3>
          <p className="menu-item-desc">{MENU.Calzones.name}</p>
          <p className="menu-price-callout">${MENU.Calzones.price.toFixed(2)}</p>
          <p className="menu-item-desc">{MENU.Calzones.description}, additional toppings ${MENU.Calzones.additionalToppingPrice.toFixed(2)} each.</p>

          <h3 className="menu-subsection-heading">Clay Fusions</h3>
          <p className="menu-item-desc">{MENU.ClayFusions.description} · Pizza includes cheese &amp; 1-topping.</p>
          <table className="menu-table">
            <tbody>
              {MENU.ClayFusions.sizes.map((item, i) => (
                <tr key={i}>
                  <td className="col-size">{item.size}</td>
                  <td></td>
                  <td className="col-price">${item.price.toFixed(2)}{i > 0 ? '*' : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="menu-small-heading">Extra Dipping Sauces</p>
          <p className="menu-price-callout">${MENU.DippingSauces.price.toFixed(2)}</p>
          <ul className="menu-list">
            {MENU.DippingSauces.options.map(s => <li key={s}>{s}</li>)}
          </ul>
          <p className="menu-note">* Medium and Large served with one dipping sauce. X-Large comes with two.</p>
        </section>

        <hr className="menu-divider" />

        {/* Sides */}
        <section id="sides" className="menu-section">
          <h2 className="menu-section-heading">Sides</h2>

          <h3 className="menu-subsection-heading">Pepperoni Rolls</h3>
          <p className="menu-item-desc">Pepperoni Pizza Rolled Up</p>
          <table className="menu-table">
            <tbody>
              {[
                { count: '1 Roll', price: 1.49, note: ' ($0.75 on Tuesdays)' },
                { count: '4 Rolls', price: 5.96 },
                { count: '8 Rolls', price: 11.92 },
                { count: '12 Rolls', price: 17.88 },
              ].map((item, i) => (
                <tr key={i}>
                  <td className="col-size">{item.count}</td>
                  <td>{item.note || ''}</td>
                  <td className="col-price">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="menu-subsection-heading">Bread Nuggets</h3>
          <p className="menu-item-desc">Garlic Breadsticks — served with ranch and marinara.</p>
          <p className="menu-price-callout">7 Bread Nuggets — $9.00</p>

          <h3 className="menu-subsection-heading">Gumby's Famous Wings</h3>
          <p className="menu-item-desc">Choose from boneless or bone-in.</p>

          <p className="menu-small-heading">Boneless</p>
          <table className="menu-table">
            <tbody>
              <tr><td className="col-size">1/2 lb</td><td></td><td className="col-price">$8.60</td></tr>
              <tr><td className="col-size">1 lb</td><td></td><td className="col-price">$17.19</td></tr>
            </tbody>
          </table>

          <p className="menu-small-heading">Bone-In</p>
          <table className="menu-table">
            <tbody>
              <tr><td className="col-size">1/2 lb</td><td></td><td className="col-price">$8.34</td></tr>
              <tr><td className="col-size">1 lb</td><td></td><td className="col-price">$16.69</td></tr>
            </tbody>
          </table>

          <p className="menu-item-desc" style={{ marginBottom: '0.5rem' }}>Seven flavors to choose from:</p>
          <ul className="menu-list">
            {['BBQ', 'Buffalo', 'Garlic N Herb', 'Honey Garlic', 'Hot BBQ', 'Mango Habanero', 'Sweet Chili'].map(f => <li key={f}>{f}</li>)}
          </ul>
          <p className="menu-note">Allow 14–20 minutes for preparation. Served with ranch or bleu cheese.</p>
        </section>

        <hr className="menu-divider" />

        {/* Appetizers */}
        <section id="appetizers" className="menu-section">
          <h2 className="menu-section-heading">Oven-Toasted Appetizers</h2>
          <h3 className="menu-subsection-heading">Toasted Ravioli</h3>
          <p className="menu-price-callout">8 Count — $9.00</p>
          <p className="menu-item-desc">Choice of beef or cheese ravioli, served with marinara.</p>
        </section>

        <hr className="menu-divider" />

        {/* Salads */}
        <section id="salads" className="menu-section">
          <h2 className="menu-section-heading">Fresh Salads</h2>
          <p className="menu-price-callout">Add any salad to your order for $8.75</p>
          {[
            { name: 'House Garden', desc: 'Romaine, tomato, cucumber, carrots, red onion, green peppers, mozzarella, croutons.' },
            { name: 'Italian', desc: 'Romaine, pepperoni, tomato, red onion, banana pepper.' },
            { name: 'Greek', desc: 'Romaine, tomato, onion, black olive, feta, crouton.' },
            { name: 'Grilled Chicken', desc: 'Romaine, grilled chicken, tomato, black olive, green pepper, croutons.' },
            { name: 'Caesar', desc: 'Romaine, tomato, cucumber, parmesan cheese, croutons.' },
          ].map((item, i) => (
            <div key={i} className="menu-item-card">
              <p className="menu-item-name">{item.name}</p>
              <p className="menu-item-desc">{item.desc}</p>
            </div>
          ))}
        </section>

        <hr className="menu-divider" />

        {/* Desserts */}
        <section id="desserts" className="menu-section">
          <h2 className="menu-section-heading">Desserts</h2>
          <h3 className="menu-subsection-heading">Cinistix</h3>
          <p className="menu-item-desc">Fresh dough, smothered in butter, covered in cinnamon &amp; sugar. Served with icing.</p>
          <table className="menu-table">
            <tbody>
              {MENU.Desserts.filter(d => d.name.includes('Cinistix')).map((item, i) => (
                <tr key={i}>
                  <td className="col-size">{item.name}</td>
                  <td></td>
                  <td className="col-price">${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {MENU.Desserts.filter(d => !d.name.includes('Cinistix')).map(item => (
            <div key={item.name}>
              <h3 className="menu-subsection-heading">{item.name}</h3>
              {item.name === 'Cinnamon Rolls' && (
                <p className="menu-item-desc">Eight warm, gooey mini cinnamon rolls, served with icing.</p>
              )}
              <p className="menu-price-callout">
                {item.name === 'Cinnamon Rolls' ? '8–10 Buns — ' : ''}${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </section>

        <hr className="menu-divider" />

        {/* Beverages */}
        <section id="beverages" className="menu-section">
          <h2 className="menu-section-heading">Beverages</h2>

          <h3 className="menu-subsection-heading">2-Liter Bottles — ${twoLiter.price.toFixed(2)}</h3>
          <ul className="menu-list">{twoLiter.options.map(d => <li key={d}>{d}</li>)}</ul>

          <h3 className="menu-subsection-heading">20 oz. Soft Drinks — ${twentyOz.price.toFixed(2)}</h3>
          <ul className="menu-list">{twentyOz.options.map(d => <li key={d}>{d}</li>)}</ul>

          <h3 className="menu-subsection-heading">12 oz. Cans — ${cans.price.toFixed(2)}</h3>
          <ul className="menu-list">{cans.options.map(d => <li key={d}>{d}</li>)}</ul>
        </section>

        <hr className="menu-divider" />

        <div className="menu-disclaimer">
          All prices subject to change without notice. Prices do not include tax or delivery fee.
        </div>
      </main>
    </ContentWrapper>
  );
};

export default Menu;