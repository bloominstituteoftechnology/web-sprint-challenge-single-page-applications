import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import initialFormValues from "./initialFormsValues";
import schema from "./schema";
import initialFormErrors from "./initalFormErrors";

const isDisabled = false

function Form() {
  const [order, setOrder] = useState({});
  const [thisOrder, SetThisOrder] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
 const [disabled, setDisabled]= useState(isDisabled);

 //pizza ordering function
  const orderPizza = (newOrder) => {
  axios
    .post("https://reqres.in/api/", newOrder)
    .then((res) => {
      SetThisOrder([...order, res.data]);
      console.log("Api success", res.data);
      setOrder(initialFormValues);
    })
    .catch((err) => {
      console.log("error", err);
    })
  }
 
    //submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "Email"];
    const requiredFieldsValues = requiredFields
      .map((rf) => {
        setErrors((prevFormErrors) => ({
          ...prevFormErrors,
          [rf]: thisOrder [rf] ? false : true,
        }));
        return thisOrder [rf];
      })
      .filter(Boolean);

    if (requiredFields.length !== requiredFieldsValues.length) {
      return;
    }

    
    const newOrder = {
      name: thisOrder.name,
      Email: thisOrder.Email,
      extraCheese: thisOrder.extraCheese,
      pepperoni: thisOrder.pepperoni,
      pineapple: thisOrder.pineapple,
      ham: thisOrder.ham,
    };
    orderPizza(newOrder)
    console.log('order received')
  SetThisOrder(initialFormValues)
  };
  //error setter
  // const setOrderErrors = (name, value) => {
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then(() => setErrors({ ...errors, [name]: "" }))
  //     .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  // };
//change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("name", name, "value", value, "type", type, "checked", checked);
    const inputValue = type === "checkbox" ? checked : value;
    // setOrderErrors(name, inputValue);
    setOrder((previousFormValues) => ({
      ...previousFormValues,
      [name]: inputValue,
    }));
    // setOrderErrors((previousFormErrors) => ({
    //   ...previousFormErrors,
    //   [name]: value ? false : true,
    // }));
  };
  useEffect(() =>{
    schema.isValid(thisOrder).then((valid) => setDisabled(!valid))
  }, [thisOrder])


  return (
    <form onSubmit={handleSubmit}>
      <div className="pizzaForm">
        <input
          onChange={handleChange}
          placeholder="Name"
          id="nameInput"
          name="name"
          type="text"
          value={thisOrder.name}
      
        /> 
        {errors.name && (
          <span> name is required </span>
        )}
        <br />

        <input
          onChange={handleChange}
          placeholder="Email"
          id="emailInput"
          name="Email"
          type="Email"
          value={thisOrder.Email}
        />
        {errors.Email &&(
          <span>Email is required</span>
        )}
        <br />

        
          {" "}
          TOPPINGS
          <br>
          </br>
          <label htmlFor= "extra cheese">extra cheese
          <input
            type="checkbox"
            name="extraCheese"
            id="extraCheese"
            onChange={handleChange}
          />
          {errors.extraCheese &&(<span>
            nothing selected
          </span>

          )}
          </label>
          <label htmlFor= "pepperoni"> pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            id="pepperoni"
            onChange={handleChange}
          />
          </label>
          <br />
          <label htmlFor= "pineapple"> pineapple
          <input
            type="checkbox"
            name="pineapple"
            id="pineapple"
            onChange={handleChange}
          />
          </label>
          <label htmlFor= "ham">ham
          <input type="checkbox" name="ham" id="ham" onChange={handleChange} />
        </label>

        <button type="submit">submit</button>
      </div>
    </form>
  );
}
export default Form;