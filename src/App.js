import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";
import PizzaForm from "./PizzaForm";
import axios from "axios";

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: "",
  instructions: "",
  ///// DROPDOWN /////
  size: "",
  ///// CHECKLIST /////
  toppings: "", 
};

export default function App() {
  const [pizza, setPizza] = useState([]); // careful what you initialize your state to

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues); 

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      instructions: formValues.instructions.trim(),
      size: formValues.size.trim(),
      toppings: formValues.toppings
    };
    if (!newPizza.name || !newPizza.size || !newPizza.toppings) {
      return;
    }
    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
    //  d) also on success clear the form
    axios
      .post("fakeapi.com", newPizza)
      .then((res) => {
        setPizza([res.data, ...pizza]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        debugger;
      });
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setPizza(res.data));
  }, []);

  return (
    <div className="container">
      <h1>Form App</h1>

      <PizzaForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {pizza.map((pizza) => {
        return <Pizza key={pizza.id} details={pizza} />;
      })}
    </div>
  );
}
