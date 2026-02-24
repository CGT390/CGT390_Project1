# CGT390_Project1 - React + Vite

Github Repo: https://github.com/CGT390/CGT390_Project1
View at: https://cgt390.github.io/CGT390_Project1/

This project is a React single-page application (SPA) built with Vite.  
It features a dynamic navbar, a banner, and a content wrapper that updates based on route navigation. The app is designed to be hosted under the subdirectory `/CGT390_Project1/` (for example, on GitHub Pages).

---

## 📂 Features

- React + Vite setup with HMR (Hot Module Replacement)  
- React Router for SPA navigation  
- Navbar dynamically changes content in the wrapper  
- Sticky top navbar and banner  
- Smooth scroll-to-top behavior on route change  

---

## 🔧 Installation

1. **Clone the repository**

```bash
git clone <your-repo-link>
cd CGT390_Project1

#Install Dependencies
npm install

#Then Run 
npm run dev

---

## Checkpoint 2

In this iteration, I added some interactive components like...
 - A footer
 - A menu with a 'jump to' section
 - A rough 'order online' section that allows the user to add things to a 'Cart'
    - This cart is purely frontend, it doesnt send anything to any backend
    - re-renders things in the middle menu section depending on what button is selected
 - A rough 'Apply' form that only allows specific content
    
In the future, I plan to...  
 - make the 'checkout' easier to use, and to add overlays that make it more clear what the user is ordering, ask for deliver vs pickup 
 - work on fixing small bugs 
 - Add better buttons/CSS for the 'Apply' page
 - Add content for the 'Contact' pages
 - add more CSS and color to the website overall


## Final Checkpoint

##  Scope of Recreation

Rather than rebuilding every page of the original site, this project focused on the most interactive and technically meaningful parts of the customer journey:

- A full Menu page with section-based navigation and real pricing data
- An Order Online page with a live cart, category browsing, and topping selection
- A Checkout page that reads from the cart, collects delivery info, and confirms the order

Static or low-interactivity pages (franchise info, about, locations) were intentionally left out of scope.

---

## Features Implemented

- Menu page with sticky full-width section jump nav, topping chips, pricing tables, and all categories (pizza, specialty pies, sides, appetizers, salads, desserts, beverages)
- Order Online page with:
  - Category sidebar (accordion-style, single active category)
  - Live cart panel with item count badge and running total
  - Topping selector modal (radio-style, enforces 1-topping limit per item)
  - Add / edit / remove topping flow per cart item
  - Persistent cart via `localStorage` — survives page refresh
- Checkout page with:
  - Cart summary showing each item name, selected toppings, and per-item price
  - Contact & delivery form with validation
  - Order confirmation overlay on submit
  - Cart cleared from state and `localStorage` on successful order

---

## Technical Implementation

### State Management

All state is managed locally with React hooks — no external state library (Redux, Zustand, etc.) was used. The cart is the most complex piece of shared state:

- `OrderOnline` owns the cart array in `useState` and passes mutations down as props
- `Checkout` reads the cart from `localStorage` on mount via `useEffect`, keeping the two pages decoupled
- Each cart item is an object: `{ name, price, allowToppings, toppings[] }`
- Topping prices are calculated at render time (`$1 per topping`) rather than stored, keeping the source of truth clean

### Routing Structure

Client-side routing is handled with React Router using hash-based URLs (`HashRouter`) for easy static deployment:

| `#/` | Home |
| `#/menu` | Menu |
| `#/order` | OrderOnline |
| `#/checkout` | Checkout |

Navigation from the cart to checkout uses `window.location.hash = "#/checkout"` after writing the cart to `localStorage`, which triggers a full route transition without prop-drilling the cart across pages.

### Hooks Used

| `useState` | Cart items, open category, topping modal index, all form fields, success overlay flag |
| `useEffect` | Loading cart from `localStorage` on Checkout mount |

---

## Future Improvements

- Quantity controls — allow users to increment/decrement item quantities in the cart rather than adding duplicates
- Multi-topping support — configurable `maxToppings` per item type (e.g. specialty pies could allow more)
- Order persistence — save order history to `localStorage` or a backend so users can reference past orders
- Real checkout integration — connect to a payment processor (Stripe) or order management API
- Animations — cart add/remove transitions, modal entrance animations
- Accessibility audit — full keyboard navigation and screen reader support across the order flow
- Mobile cart drawer — on small screens, replace the sidebar cart with a slide-up drawer triggered by a floating button