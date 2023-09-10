import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Help from './components/Help';
import PizzaForm from './components/PizzaForm';
import Home from './components/Home';
import OrderSuccess from './components/OrderSuccess';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pizza" element={<PizzaForm />} />
        <Route path="/success" element={<OrderSuccess/>} />
      </Routes>
    </div>
  );
}
export default App;
