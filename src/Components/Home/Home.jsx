import React from "react";
import { useLocation } from 'react-router-dom';
import Newsletter from '../Newsletter/Newsletter'; 
import Footer from '../Footer/Footer'; 
import Banner from "./Banner/Banner";
import Products from "../Products/Products"
import "./Home.css";

function Home({ setShowCart }) {
  const location = useLocation();
  return (
    <div>
     <Banner/>
     <div className="main-content">
      <Products/>

      {location.pathname === '/' && <Newsletter />}
      {location.pathname === '/' && <Footer />}
     </div>
   
  </div>



  
  );
}

export default Home;
