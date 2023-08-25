import React, { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
 

  return (
    <Context.Provider value={{ showCart, setShowCart,cartItems, setCartItems }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
