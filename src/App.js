import React, {useState} from "react";
import {Link,Route} from "react-router-dom";
import PizzaCard from "./PizzaCard";
import Form from "./Form"
import * as yup from "yup";


const fromIdValue = {
  name: "",
  size: "",
  pepporoni: "",
  hawaiian: false,
  bbq: false,
  chicken: false,
  textarea: "",
};

const Formerror ={
  name: "",
  size: "",
};

const pizzaValue =[];

const App = () => {

  const [pizza, setPizza] = useState(pizzaValue);
  const [ formErrors, setFormErrors] = useState(Formerror);
  const [formValue, setForValue] = useState(fromIdValue);

  const pizzaOnChange = (name, value) =>{
    setForValue({...formValue, [name]: value });
  };

const pizzaSubmit = () =>{
  setPizza([...pizza, formValue]);
  setForValue(fromIdValue);
};



  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
