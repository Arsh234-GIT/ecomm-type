import React from "react";
import "./EmptyCart.css"; // Update the file name here
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div className="empty-cart">
      <p>Your cart is empty</p>
      <div className="continue-shopping">
        <button onClick={handleContinueShopping} className="continue-shopping-button">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
