import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Help from "./Pages/Help";
import OrderForm from "./Components/OrderForm";
import Confirmation from "./Pages/Confirmation";




const App = () => {
  return (
    <>
      <h1 className="card text-center mb-3">Order Pizza</h1>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/OrderForm" element={<OrderForm />} />
        <Route path="/Confirmation" element={<Confirmation />} />
      </Routes>

    </>
  );
};
export default App;
