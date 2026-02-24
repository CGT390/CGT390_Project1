import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/OrderOnline";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Checkout from './pages/Checkout';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const clearCart = () => setCart([]);
  return (
    <>
      {/* <Banner /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
