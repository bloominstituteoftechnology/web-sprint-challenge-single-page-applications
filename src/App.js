import React from "react";
import Navbar from './Navbar';
import Home from './Home';
import PizzaForm from './PizzaForm';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <PizzaForm />
    </div>
  );
};
export default App;
