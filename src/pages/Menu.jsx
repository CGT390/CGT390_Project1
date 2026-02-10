import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import { MENU } from "../data/menu";
import './Menu.css';

const Menu = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Adjust offset to account for sticky nav
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Extract data from MENU
  const { justCheese, oneTopping, toppings, glutenFree } = MENU.Pizza;
  const { sizes: specialtySizes, bestSellers, columbiaFavorites } = MENU.SpecialtyPies;
  const { twoLiter, twentyOz, cans } = MENU.Beverages;

  return (
    <ContentWrapper>
      <Header text="Menu" />
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>

        <nav className="navigation">
          <div className="nav-container">
            <h3 className="nav-title">Jump to a Section</h3>
            <div className="nav-buttons">
              {[
                { id: 'pizza', label: 'Pizza' },
                { id: 'specialty', label: 'Specialty Pies' },
                { id: 'sides', label: 'Sides' },
                { id: 'appetizers', label: 'Appetizers' },
                { id: 'salads', label: 'Salads' },
                { id: 'desserts', label: 'Desserts' },
                { id: 'beverages', label: 'Beverages' }
              ].map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="nav-button"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          {/* Just Cheese Section */}
          <section id="pizza" className="section">
            <h2 className="section-title">{justCheese.title}</h2>
            <table className="menu-table">
              <tbody>
                {justCheese.sizes.map((item, i) => (
                  <tr key={i}>
                    <td className="size-col">{item.size}</td>
                    <td>Cheese: ${item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Pick a Pie and a Topping */}
          <section className="section">
            <h2 className="section-title">{oneTopping.title}</h2>
            <table className="menu-table">
              <tbody>
                {oneTopping.sizes.map((item, i) => (
                  <tr key={i}>
                    <td className="size-col">{item.size}</td>
                    <td>Cheese & 1-Topping: ${item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div>
              <h3 className="small-title">Available Toppings:</h3>
              <div className="topping-grid">
                {toppings.available.map(topping => (
                  <div key={topping} className="topping-item">• {topping}</div>
                ))}
              </div>
              <p className="text-note">
                <strong>Additional toppings:</strong><br />
                {toppings.additionalPricing.map((item, i) => (
                  <span key={i}>
                    {item.size} ${item.price.toFixed(2)}
                    {i < toppings.additionalPricing.length - 1 ? ' | ' : ''}
                  </span>
                ))}
              </p>
              <p className="text-note text-italic">
                *{glutenFree.description} - ${glutenFree.price.toFixed(2)}
              </p>
              <p className="text-note text-italic">
                *Ranch available upon request for ${MENU.DippingSauces.price.toFixed(2)}
              </p>
            </div>
          </section>

          {/* Specialty Pies */}
          <section id="specialty" className="section">
            <h2 className="section-title">Specialty Pies</h2>
            <table className="menu-table">
              <tbody>
                {specialtySizes.map((item, i) => (
                  <tr key={i}>
                    <td className="size-col">{item.size}</td>
                    <td>${item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="subsection-title">Best Sellers</h3>
            {bestSellers.map((item, i) => (
              <div key={i} className="menu-item">
                <strong className="menu-item-name">{item.name}:</strong>
                <p className="menu-item-desc">{item.toppings.join(', ')}</p>
              </div>
            ))}

            <h3 className="subsection-title">Columbia Favorites</h3>
            {columbiaFavorites.map((item, i) => (
              <div key={i} className="menu-item">
                <strong className="menu-item-name">{item.name}:</strong>
                <p className="menu-item-desc">{item.toppings.join(', ')}</p>
              </div>
            ))}

            <h3 className="subsection-title">Pokey Stix</h3>
            <p className="menu-item-desc">{MENU.PokeyStix.name}</p>
            <table className="menu-table">
              <tbody>
                {MENU.PokeyStix.sizes.map((item, i) => (
                  <tr key={i}>
                    <td className="size-col">{item.size}</td>
                    <td>${item.price.toFixed(2)}{i > 0 ? '*' : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="subsection-title">Calzones</h3>
            <p className="menu-item-desc">{MENU.Calzones.name}</p>
            <p className="price-large">${MENU.Calzones.price.toFixed(2)}</p>
            <p className="menu-item-desc">
              {MENU.Calzones.description}, additional Calzone toppings ${MENU.Calzones.additionalToppingPrice.toFixed(2)} each.
            </p>

            <h3 className="subsection-title">Clay Fusions</h3>
            <p className="menu-item-desc">
              {MENU.ClayFusions.description}<br />Pizza includes cheese & 1-topping.
            </p>
            <table className="menu-table">
              <tbody>
                {MENU.ClayFusions.sizes.map((item, i) => (
                  <tr key={i}>
                    <td className="size-col">{item.size}</td>
                    <td>${item.price.toFixed(2)}{i > 0 ? '*' : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="small-title">Extra dipping sauces</h3>
            <p className="price-regular">${MENU.DippingSauces.price.toFixed(2)}</p>
            <ul className="menu-list">
              {MENU.DippingSauces.options.map((sauce) => (
                <li key={sauce}>{sauce}</li>
              ))}
            </ul>
            <p className="text-note text-italic">
              * Medium and Large items served with one dipping sauce.<br />
              ** X-Large come with two dipping sauces.
            </p>
          </section>

          <hr className="divider" />

          {/* Sides */}
          <section id="sides" className="section">
            <h2 className="section-title">Sides</h2>

            <h3 className="subsection-title">Pepperoni Rolls</h3>
            <p className="menu-item-desc">Pepperoni Pizza Rolled Up</p>
            <table className="menu-table">
              <tbody>
                {[
                  { count: '1 Roll', price: 1.49, note: ' ($0.75 on Tuesdays)' },
                  { count: '4 Rolls', price: 5.96 },
                  { count: '8 Rolls', price: 11.92 },
                  { count: '12 Rolls', price: 17.88 }
                ].map((item, i) => (
                  <tr key={i}>
                    <td className="size-col">{item.count}</td>
                    <td>${item.price.toFixed(2)}{item.note || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="subsection-title">Bread Nuggets</h3>
            <p className="menu-item-desc">Garlic Breadsticks</p>
            <p className="price-regular">7 Bread Nuggets - $9.00</p>
            <p className="menu-item-desc">
              Served with ranch and marinara for dipping.
            </p>

            <h3 className="subsection-title">Gumby's Famous Wings</h3>
            <p className="menu-item-desc">Choose from boneless or bone-in.</p>

            <p className="text-bold">Boneless</p>
            <table className="menu-table">
              <tbody>
                <tr>
                  <td>1/2 lb Wings</td>
                  <td>$8.60</td>
                </tr>
                <tr>
                  <td>1 lb Wings</td>
                  <td>$17.19</td>
                </tr>
              </tbody>
            </table>

            <p className="text-bold">Bone-In</p>
            <table className="menu-table">
              <tbody>
                <tr>
                  <td>1/2 lb Wings</td>
                  <td>$8.34</td>
                </tr>
                <tr>
                  <td>1 lb Wings</td>
                  <td>$16.69</td>
                </tr>
              </tbody>
            </table>

            <p className="menu-item-desc">Seven wing flavors to choose from:</p>
            <ul className="menu-list">
              {['BBQ', 'Buffalo', 'Garlic N Herb', 'Honey Garlic', 'Hot BBQ', 'Mango Habanero', 'Sweet Chili'].map((flavor) => (
                <li key={flavor}>{flavor}</li>
              ))}
            </ul>
            <p className="text-note text-italic">
              Allow fourteen to twenty minutes for preparation. Served with ranch or bleu cheese for dipping.
            </p>
          </section>

          <hr className="divider" />

          {/* Appetizers */}
          <section id="appetizers" className="section">
            <h2 className="section-title">Oven-Toasted Appetizers</h2>

            <h3 className="subsection-title">Toasted Ravioli</h3>
            <p className="price-regular">8 Count - $9.00</p>
            <p className="menu-item-desc">
              Choice of beef or cheese ravioli, served with marinara.
            </p>
          </section>

          <hr className="divider" />

          {/* Fresh Salads */}
          <section id="salads" className="section">
            <h2 className="section-title">Fresh Salads</h2>
            <p className="price-medium">
              Add the following to your order for only $8.75!
            </p>

            {[
              { name: 'House Garden Salad', desc: 'Romaine, tomato, cucumber, carrots, red onion, green peppers, mozzarella, croutons.' },
              { name: 'Italian', desc: 'Romaine, pepperoni, tomato, red onion, banana pepper.' },
              { name: 'Greek Salad', desc: 'Romaine, Tomato, Onion, Black Olive, Feta, Crouton' },
              { name: 'Grilled Chicken', desc: 'Romaine, grilled chicken, tomato, black olive, green pepper, croutons.' },
              { name: 'Caesar', desc: 'Romaine, tomato, cucumber, parmesan cheese, croutons.' }
            ].map((item, i) => (
              <div key={i} className="menu-item">
                <strong className="menu-item-name">{item.name}:</strong>
                <p className="menu-item-desc">{item.desc}</p>
              </div>
            ))}
          </section>

          <hr className="divider" />

          {/* Desserts */}
          <section id="desserts" className="section">
            <h2 className="section-title">Desserts</h2>

            <h3 className="subsection-title">Cinistix</h3>
            <p className="menu-item-desc">
              Our fresh dough, smothered in butter, and covered in a layer of cinnamon & sugar. Served with icing.
            </p>
            <table className="menu-table">
              <tbody>
                {MENU.Desserts.filter(d => d.name.includes('Cinistix')).map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {MENU.Desserts.filter(d => !d.name.includes('Cinistix')).map((item) => (
              <div key={item.name}>
                <h3 className="subsection-title">{item.name}</h3>
                {item.name === 'Cinnamon Rolls' && (
                  <p className="menu-item-desc">
                    Eight warm, gooey mini cinnamon rolls, served with icing.
                  </p>
                )}
                <p className="price-regular">
                  {item.name === 'Cinnamon Rolls' ? '8 to 10 Buns - ' : ''}
                  ${item.price.toFixed(2)}
                </p>
              </div>
            ))}
          </section>

          <hr className="divider" />

          {/* Beverages */}
          <section id="beverages" className="section">
            <h2 className="section-title">Beverages</h2>

            <h3 className="subsection-title">2-Liter Bottles</h3>
            <p className="price-medium">${twoLiter.price.toFixed(2)}</p>
            <ul className="menu-list">
              {twoLiter.options.map((drink) => (
                <li key={drink}>{drink}</li>
              ))}
            </ul>

            <h3 className="subsection-title">20 oz. Soft Drinks</h3>
            <p className="price-medium">${twentyOz.price.toFixed(2)}</p>
            <ul className="menu-list">
              {twentyOz.options.map((drink) => (
                <li key={drink}>{drink}</li>
              ))}
            </ul>

            <h3 className="subsection-title">12 oz. Soft Drink Cans</h3>
            <p className="price-medium">${cans.price.toFixed(2)}</p>
            <ul className="menu-list">
              {cans.options.map((drink) => (
                <li key={drink}>{drink}</li>
              ))}
            </ul>
          </section>

          <hr className="divider" />

          {/* Disclaimer */}
          <div className="disclaimer">
            <p>
              All prices subject to change without notice. Prices do not include tax or delivery fee.
            </p>
          </div>
        </main>
      </div>
    </ContentWrapper>
  );
}

export default Menu;
