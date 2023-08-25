import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from "../Cart/Cart";

import "./Navbar.css";

function Navbar({ showCart,cartItemsCount }) {
  return (
    <>
      <nav className="main-navbar">
        <div className="nav-content">
          <div className="left">Typingtrove</div>
          <ul className="centre">
            <li>keyboards</li>
            <li>keycaps</li>
            <li>Accessories</li>
          </ul>
          <div className="right">
            <span className="search-item"><FaSearch/></span>
            <Link to="/cart" className="cart-item-link">
              <FaShoppingCart/>
              <span className="cart-item-count">{cartItemsCount}</span>
        
            </Link>
          </div>
        </div>
      </nav>
      {showCart && <Cart />}
    </>
  );
}

export default Navbar;
