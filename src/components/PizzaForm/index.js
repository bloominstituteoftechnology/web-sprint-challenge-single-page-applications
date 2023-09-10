import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import "./index.css";

export default function Index() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [err, setErr] = useState(false);
  const [size, setSize] = useState('Small');
  const [special, setSpecial] = useState('');
  
  const toppingList = ['Pepperoni', 'Sousage', 'Cabaduab Bacon', 'Spicy Halian Sausage', 'Grilled Chicker', 'Onions', 'Green Pepper', 'Diced Tomatos', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese', 'Pineapple', 'Extra Cheese'];

  const handleSubmit = event => {
    event.preventDefault();
    if (name.length < 2)
    {
      setErr(true);
    }
    else
    {
      const order = {};
      console.log(`Name: ${name}, Size: ${size}, Special: ${special}`);
      const toppingsChecklist = document.querySelectorAll('[type="checkbox"]');
      
      order['name'] = name;
      order['size'] = size;
      order['special'] = special;
      toppingsChecklist.forEach(top => {
        order[top.name] = top.checked ? true : false
      })
      axios.post("https://reqres.in/api/orders", order);
      navigate('/success');
    }
  }

  const handleInputName = event => {
    if (event.target.value.length >= 2)
      setErr(false);
    else
     setErr(true);
    setName(event.target.value);
  }

  const handleSelectSize = event => {
    setSize(event.target.value);
  }

  const handleInputSpecial = event => {
    setSpecial(event.target.value);
  }
  return (
    <div className="form-wrapper">
      <p className="form-title">Build your own Pizza</p>
      <div className="form-pizza"></div>
      <form onSubmit={handleSubmit} id="pizza-form">
        <div className="form-group">
          <label>Insert pizza name (*Required)</label>
          <input type="text" id="name-input" value={name} onChange={handleInputName}/>
          {
            err ? <p className="error">name must be at least 2 characters</p>:<></>
          }
        </div>
        <div className="form-group">
          <label>Choice of Size (*Required)</label>
          <select value={size} onChange={handleSelectSize} id="size-dropdown">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="ExtraLarge">ExtraLarge</option>
          </select>
        </div>
        <div className="form-group">
          <label>Add Toppings</label>
          <div className="checkbox-wrapper">
            {
              toppingList.map((data, index) => {
                return (
                <div>
                  <input className="checkbox" type="checkbox" key={index} id={index.toString()} name={data}/>
                  <span>{data}</span>
                </div>)
              })
            }
          </div>
        </div>
        <div className="form-group">
          <label>Special instructions</label>
          <input type="text" id="special-text" value={special} onChange={handleInputSpecial} placeholder="Anything else you'd like to add?"/>
        </div>
        <button type="submit" id="order-button">Order</button>
      </form>
    </div>
  )
}
