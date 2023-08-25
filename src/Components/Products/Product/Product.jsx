import React, { useState } from "react";
import "./Product.css";

const Product = ({ title, description, price, coverImg, hoverImg, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="Product-card" onClick={onClick}>
      <img
        className="thumbimage"
        src={isHovered ? hoverImg : coverImg}
        alt=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <span className="name">{title}</span>
      <span className="price">${price}</span>
    </div>
  );
};

export default Product;
