import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Product from "./Product/Product";
import "./Products.css";
import Data from "../../Data";

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="product-container">
      <h2 className="section-heading">New Arrivals</h2>
      <div className="products">
        {Data.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            coverImg={product.coverImg}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
      <div className="view-all-button">
        <Link to="/">View All</Link>
      </div>
    </div>
  );
};

export default Products;
