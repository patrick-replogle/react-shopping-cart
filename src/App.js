import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { createDecipher } from "crypto";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ProductContext } from "./contexts/ProductContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = id => {
    const newArray = cart.filter(product => {
      return product.id !== id;
    });
    setCart(newArray);
  };

  return (
    <ProductContext.Provider value={{ addItem, removeItem, products }}>
      <div className="App">
        <Navigation cart={cart} />

        {/* Routes */}
        <Route exact path="/" component={Products} />

        <Route
          path="/cart"
          render={() => <ShoppingCart cart={cart} removeItem={removeItem} />}
        />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
