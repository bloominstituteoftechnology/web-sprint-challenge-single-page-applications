import React from "react";



function Form() {

    const [form, setForm] = useState([
        {
          name: "",
          size: "",
          topping1: false,
          topping2: false,
          special: "",
      }
      ]);

      return (
        <div className="pizzaForm">
          <h1>ORDER YOUR FAVORITE PIZZA BELOW</h1>
      <form>
        <p><label htmlFor="name">Your Name</label>
        <input id="name" type="text" placeholder="Name" /></p>
        <p><label htmlFor="sauce">Choose Your Sauce:</label>
        <input id="sauce" type="radio" value="Tomato" name="sauce" /> Tomato
        <input id="sauce" type="radio" value="BBQ" name="sauce" /> BBQ
        <input id="sauce" type="radio" value="Alfredo" name="sauce" /> Alfredo
        </p>
        <p><label htmlFor="size">What Size Do You Want Your Pizza</label>
          <select>
            <option id="size" value="Small">Small</option>
            <option id="size" value="Medium">Medium</option>
            <option id="size" value="Large">Large</option>
            <option id="size" value="Extra Large">Extra Large</option>
          </select>
        </p>
        <label htmlFor="toppings">Choose Your Toppings Below:</label>
        <p>
        <input id="toppings" type="checkbox" value="pepperoni" name="pepperoni" />Pepperoni
        <input id="toppings" type="checkbox" value="sausage" name="sausage" />Sausage
        <input id="toppings" type="checkbox" value="Ham" name="Ham" />Ham
        <input id="toppings" type="checkbox" value="Bacon" name="Bacon" />Bacon
        </p>
        <p>
        <input id="toppings" type="checkbox" value="Pineapple" name="Pineapple" />Pineapple
        <input id="toppings" type="checkbox" value="Mushroom" name="Mushroom" />Mushroom
        <input id="toppings" type="checkbox" value="Green Peppers" name="Green Peppers" />Green Peppers
        <input id="toppings" type="checkbox" value="jalapeno" name="jalapeno" />Jalapeno
        </p>
        <p><label htmlFor="special">Specialty</label>
          <select>
            <option id="special" value="none">None</option>
            <option id="special" value="Punko Pizza">The Punko Pizza</option>
            <option id="special" value="Crispy Critter">The Crispy Critter</option>
          </select>
        </p>
        <p><label>Special Instructions</label><input type="text" placeholder="Instructions" /></p>
        <button className="submit">Submit</button>
      </form>
      </div>
      );
      
      
      }
      
      
      export default Form;