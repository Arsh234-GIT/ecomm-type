import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa";
import "./SingleProduct.css";
import Data from "../../Data";

const SingleProduct = ({ addToCart }) => {
  const { productId } = useParams();
  const product = Data.find(item => item.id === parseInt(productId, 10));

  const [quantity, setQuantity] = useState(1); 
  const [isHovered, setIsHovered] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change); // Ensure quantity is at least 1
    setQuantity(newQuantity);
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
          <img
              src={isHovered ? product.hoverImg : product.coverImg}
              alt={product.title}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price"> ${product.price}</span>
            <span className="desc">{product.description}</span>
      <div className="cart-buttons">
        <div className="quantity-buttons">
          <button className="minus" onClick={() => handleQuantityChange(-1)}>
            <FaMinus />
          </button>
          <span>{quantity}</span>
          <button className="plus" onClick={() => handleQuantityChange(1)}>
            <FaPlus />
          </button>
        </div>
        <button
          className="add-to-cart-button"
          onClick={() => addToCart(product, quantity)} // Pass the selected quantity
        >
          <FaCartPlus size={20} />
          ADD TO CART
        </button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default SingleProduct;
