import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./Emptycart/Emptycart";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = ({ cartItems, updateCartItemQuantity, removeCartItem }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/");
  };

  const nonZeroCartItems = cartItems.filter(item => item.quantity > 0);

  if (!nonZeroCartItems || nonZeroCartItems.length === 0) {
    return <EmptyCart />;
  }


  const handleQuantityChange = (product, change) => {
    updateCartItemQuantity(product, product.quantity + change);
  };

  const productsJSX = cartItems
  .filter(product => product.quantity > 0) 
  .map((product) => (
    <tr key={product.id}>
      <td>
        <img src={product.coverImg} alt="Item" className="product-image" />
      </td>
      <td>{product.title}</td>
      <td> $ {product.price}</td>
      <td>
        <div className="quantity-buttons">
          <button className="minus" onClick={() => handleQuantityChange(product, -1)}>
            <FaMinus />
          </button>
          <span>{product.quantity}</span>
          <button className="plus" onClick={() => handleQuantityChange(product, 1)}>
            <FaPlus />
          </button>
        </div>
      </td>
     
    </tr>
  ));

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{productsJSX}</tbody>
      </table>

      <div className="cart-total">
        <div className="total-amount">
          <p>Total: ${totalPrice}</p>
        </div>
        <div className="checkout-buttons">
          <button onClick={handleCheckout} className="continue-shopping-button">
            Continue Shopping
          </button>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
