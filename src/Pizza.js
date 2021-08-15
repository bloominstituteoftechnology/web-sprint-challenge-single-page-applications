import React, {useState} from "react";
import "./index.css";
import axios from 'axios'
import {Link} from 'react-router-dom'



// reaplce all of these with controled inputs
export default function Pizza(props) {
  //  const { push } = props.history;
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [cheese, setCheese] = useState(false)
  const [sauce, setSauce] = useState(false)
  const [crust, setCrust] = useState(false)
  const [onion, setOnion] = useState(false)
  const [special, setSpecial] = useState('')

  function onSubmit(e) {
    e.preventDefault();
    const { push } = props.history;
    const url = `/pizza/${name}/${size}/${cheese}/${sauce}/${crust}/${onion}/${special}`
    push(url);
  }
 
function onChange(e) {  
  const target = e.target;
  const name = target.name;
  const value = target.value;
  const values = {};
  values[name] = value;
  setName(value);
  setSize(value);
  setCheese(value);
  setSauce(value);
  setCrust(value);
  setOnion(value);
  setSpecial(value);
}


  function handleSubmit(e) {
    e.preventDefault();
    const { name, size, cheese, sauce, crust, onion, special } = props;
    axios.post('/api/pizza', {
      name,
      size,
      cheese,
      sauce,
      crust,
      onion,
      special
    })
      .then(res => {
        console.log(res.data);
        props.history.push('/pizza');
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (


    <div className="pizza">
          <Link to='/'>Home</Link> 
        <h1>Build Your Pizza</h1>
      <form id="pizza-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input

            type="text"
            className="form-control"
            id="name-input"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size</label>
          <select

            className="form-control"
            id="size-dropdown"
            value={size}






            onChange={e => setSize(e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>




          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cheese">Cheese</label>
          <input

            type="checkbox"
            className="form-control"
            id="cheese"
            value={cheese}
            onChange={e => setCheese(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sauce">Sauce</label>
          <input
            type="checkbox"
            className="form-control"
            id="sauce"
            value={sauce}
            onChange={e => setSauce(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="crust">Crust</label>
          <input
            type="checkbox"
            className="form-control"
            id="crust"
            value={crust}
            onChange={e => setCrust(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="onion">Onion</label>
          <input
            type="checkbox"
            className="form-control"
            id="onion"
            value={onion}
            onChange={e => setOnion(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="special">Special Instructions</label>
          <input
            type="text"
            className="form-control"
            id="special"
            placeholder="Special Instructions"
            value={special}
            onChange={e => setSpecial(e.target.value)}
          />
        </div>
        <button
          onClick={() => props.history.push("/Confirmation")}
          className="proceedToCheckout"
        >
          Proceed to Checkout
        </button>
      </form>
      
    </div>
  );
}


    