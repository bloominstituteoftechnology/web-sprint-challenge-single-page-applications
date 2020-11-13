import React, { useState } from "react";
import PizzaForm from './Components/PizzaForm';

const App = () => {
  return (
    <>
      <div className='header'>
        <h1>Lambda Eats</h1>
        <div>
          <button id='home'>Home</button>
          <button id='help'>Help</button>
        </div>
        <PizzaForm />
      </div> 
    </>
  );
};
export default App;
