import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home'
import OrderPizza from "./components/OrderPizza";

const App = () => {
  return (
   <div className="App">
      <nav className="Nav">
        <h1 className="store-header">Pizza Eatery</h1>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="order-pizza">Order</Link>
        </div>
      </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='order-pizza' element={<OrderPizza />}/>
        </Routes>


   </div>
  );
};
export default App;
