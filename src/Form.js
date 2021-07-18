import React, { useState } from "react";



function Form() {

    const [form, setForm] = useState(
      {
        name: "",
        size: "",
        special: "",
        pepperoni: false,
        sausage: false,
        ham: false,
        bacon: false,
        pineapple: false,
        mushroom: false,
        greenPepper: false,
        jalapeno: false,
        instructions: "",
    });
  
    const formSubmit = e => {
      e.preventDefault();
      console.log("form Submitted!")
      console.log("Here is the Form", form);
    };
  
    const inputChange = e => {
      console.log("Input Changed", e.target.value);
      let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
      setForm({...form, [e.target.name]: value });
    };
  
    return (
      <div className="pizzaForm">
        <h1>ORDER YOUR FAVORITE PIZZA BELOW</h1>
    <form onSubmit={formSubmit}>
      <p><label htmlFor="name">Your Name</label>
      <input 
      id="name" 
      name="name"
      type="text" 
      placeholder="Name" 
      value={form.name} 
      onChange={inputChange} 
      /></p>
      <p><label htmlFor="sauce">Choose Your Sauce:</label>
      <input id="sauce" type="radio" value="Tomato" name="sauce" /> Tomato
      <input id="sauce" type="radio" value="BBQ" name="sauce" /> BBQ
      <input id="sauce" type="radio" value="Alfredo" name="sauce" /> Alfredo
      </p>
      <p><label htmlFor="size">What Size Do You Want Your Pizza</label>
      <select id="size" name="size" value={form.size} onChange={inputChange}>
          <option>---Pick One---</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra Large">Extra Large</option>
        </select>
      </p>
      <label htmlFor="toppings">Choose Your Toppings Below:</label>
      <p>
      <input 
      id="toppings" type="checkbox" checked={form.pepperoni} 
      onChange={inputChange} name="pepperoni" 
      />Pepperoni
      <input id="toppings" type="checkbox" checked={form.sausage} 
      onChange={inputChange} name="sausage" 
      />Sausage
      <input id="toppings" type="checkbox" checked={form.ham} 
      onChange={inputChange} name="ham" 
      />Ham
      <input id="toppings" type="checkbox" checked={form.bacon} 
      onChange={inputChange} name="bacon" 
      />Bacon
      </p>
      <p>
      <input id="toppings" type="checkbox" checked={form.pineapple} 
      onChange={inputChange} name="pineapple" 
      />Pineapple
      <input id="toppings" type="checkbox" checked={form.mushroom} 
      onChange={inputChange} name="mushroom" 
      />Mushroom
      <input id="toppings" type="checkbox" checked={form.greenPepper} 
      onChange={inputChange} name="greenPepper" 
      />Green Peppers
      <input id="toppings" type="checkbox" checked={form.jalapeno} 
      onChange={inputChange} name="jalapeno" 
      />Jalapeno
      </p>
      <p><label htmlFor="special">Specialty</label>
      {/* Just here for fun : ) */}
        <select id="special" name="special" value={form.special} onChange={inputChange}>
          <option value="none">None</option>
          <option value="Punko Pizza">The Punko Pizza</option>
          <option value="Crispy Critter">The Crispy Critter</option>
        </select>
      </p>
      <p><label htmlFor="instructions">Special Instructions</label>
      <textarea 
      name="instructions"
      id="instructions"
      placeholder="Instructions"
      value={form.instructions}
      onChange={inputChange}
      /></p>
      <button className="submit">Submit</button>
    </form>
    </div>
    );
    
    
    }
    
    
    export default Form;