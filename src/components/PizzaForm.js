import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import './PizzaForm.css'


function PizzaForm() {
  const [form, setForm] = useState({
    name: "",
    sizes: {
      personalPan: false,
      small: false,
      medium: false,
      large: false,
    },
    toppings: {
      pepperoni: false,
      pineapple: false,
      bacon: false,
      peppers: false,
      mushrooms: false,
    },
    instructions: "",
  });

  const changeHandler = (e) => {
    if (e.target.type === "checkbox") {
      setForm({
        ...form,
        toppings: {
          ...form.toppings,
          [e.target.name]: e.target.checked,
        },
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Minimum of 3 charcters needed!")
      .required("Valid name needed!"),
  });

  const validationSchema = (e) => {
    e.persist();
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((success) => {
        console.log("Success", success);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const [data, setData] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <img src={'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} alt="pizza" />
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input
        name="name"
        type="text"
        value={form.name}
        placeholder="enter your name here..."
        onChange={changeHandler}
      />
      <br></br>
      
      <label htmlFor="sizes">
        Pizza Size
        <select name="sizes" value={form.sizes} onChange={changeHandler} >
          <option >Select a size...</option>
          <option value="personalPan">Personal Pan Pizza</option>
          <option value="small">Small Pizza</option>
          <option value="medium">Medium Pizza</option>
          <option value="large">Large Pizza</option>
        </select>
      </label>
      <br></br>
      
      <label htmlFor="pepperoni">
        <input name="pepperoni" type="checkbox" onChange={changeHandler} />
        Pepperoni
      </label>

      <label htmlFor="pineapple">
        <input name="pineapple" type="checkbox" onChange={changeHandler} />
        Pineapple
      </label>

      <label htmlFor="bacon">
        <input name="bacon" type="checkbox" onChange={changeHandler} />
        Bacon
      </label>

      <label htmlFor="peppers">
        <input name="peppers" type="checkbox" onChange={changeHandler} />
        Peppers
      </label>

      <label htmlFor="mushrooms">
        <input name="mushrooms" type="checkbox" onChange={changeHandler} />
        Mushrooms
      </label>
      <br></br>
      
      <label htmlFor="instructions">
        Got any special instructions for us?
        <textarea
          name="instructions"
          value={form.instructions}
          type="text"
          placeholder="special instructions go here..."
          onChange={changeHandler}
        /> 
      </label>
      <br></br>
      
      <button className="form-btn" type="submit">Submit</button>
      <h3>This is what you have ordered below:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      
    </form>
    </div>
  );
}

export default PizzaForm;
