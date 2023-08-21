import React from "react";
import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
import Form from "./comps/Form";

const App = () => {

  return (
<>
      <h1>Bloomtech Eats</h1>
      <i>Welcome to the best Pizza spot in the DMV!!!</i>
   <button> Carry Out </button> <button> Delivery</button>
      <nav>
     <Link to="/"> Home </Link>
     <Link to="/pizza">    <button id="order-pizza"> Order Now!!!</button> </Link>
     <Link to="/"> Images</Link>
      </nav>
  
      <Routes>
        <Route path="/" />
        <Route path="/pizza" element={<Form values={form} />}/>
      </Routes>

   
   </>
  );
};
export default App;
