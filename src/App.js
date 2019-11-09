import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { createDecipher } from "crypto";
import { useLocalStorage } from "./hooks/useLocalStorage";

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
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}
      <Route
        exact
        path="/"
        render={() => <Products products={products} addItem={addItem} />}
      />

      <Route
        path="/cart"
        render={() => <ShoppingCart cart={cart} removeItem={removeItem} />}
      />
    </div>
  );
}

export default App;
