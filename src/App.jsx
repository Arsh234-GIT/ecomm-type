import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Cart from "./Components/Cart/Cart";
import AppContext from "./Utils/Context";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]); 


  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);


  const addToCart = (product, quantity) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity }]);
    }
  };
 

  const removeCartItem = (productToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== productToRemove.id);
    setCartItems(updatedCart);
  };


  const updateCartItemQuantity = (product, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };


  return (
    <Router>
      <AppContext>
        <Navbar showCart={showCart} cartItemsCount={cartItemsCount} />
        <Routes>
          <Route path="/" element={<Home setShowCart={setShowCart} />} />
          <Route
            path="/products/:productId"
            element={<SingleProduct addToCart={addToCart}  />}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems}
           updateCartItemQuantity={updateCartItemQuantity}
           removeCartItem={removeCartItem}
          />} />
        </Routes>
      </AppContext>
    </Router>
  );
}

export default App;
