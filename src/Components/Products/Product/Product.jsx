import React from "react";
import "./Product.css";




const Product = ({ title, description, price, coverImg,onClick  }) => {
  return (
    <div className="Product-card" onClick={onClick}>
      <img className="thumbimage" src={coverImg} alt=""/>
      <span className="name">{title}</span>
      <span className="price">${price}</span>
    </div>
  );
};

export default Product;

