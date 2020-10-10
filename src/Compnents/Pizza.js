import React, {useState, useEffect} from "react";
import "../index.css";
import { Link } from 'react-router-dom'
import pizza from '../Pizza.jpg'
import * as Yup from "yup";
import axios from 'axios'


const Pizza = (props) => {

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [size, setSize] = useState('Small');
    const [selectedOption, setSelectedOption] = useState('Original');
    const [toppings, setToppings] = useState({
        Pepperoni: false,
        Sausage: false,
        Canadian: false,
        Italian: false,
        Chicken: false,
        Onions: false,
        Pepper: false,
        Tomatoes: false,
        Olives: false,
        Garlic: false,
        Artichoke: false,
        Cheese: false,
        Pineapple: false,
        ExtraCheese: false,
    });

    const [instructions, setInstructions] = useState('');
    const [name, setName] = useState('');

    const [errors, setErrors] = useState('');


    const formSchema = Yup.object().shape({
        name: Yup
          .string()
          .min(2, "Names must be at least 2 characters long.")
          .required("Must include email address."),
      });


    const handleSubmit = function (event){
        event.preventDefault();
        const pizza = {name: name, size: size, Sauce: selectedOption, ...toppings, Instructions: instructions}
        console.log(pizza);
        props.updatePizza(pizza);
    }
    const handleNameChange = function (e) {
        e.persist();
        Yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors("");
      })
      .catch(err => {
        setErrors(err.errors[0]);
      });
        setName(e.target.value);
      }

    const handleTextChange = function (changeEvent) {
        setInstructions(changeEvent.target.value);
      }

    const handleOptionChange = function (changeEvent) {
        setSelectedOption(changeEvent.target.value);
      }

      const handleSelectChange = function (changeEvent) {
        setSize(changeEvent.target.value);
      }
      
      
    const handleCheckChange = function (e) {
        setToppings({...toppings, [e.target.name]: !toppings[e.target.name],});
      }


      useEffect(() => {
        formSchema.isValid(name).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [name]);

  return (
    <>
        <img src = {pizza} alt='pizza'/>
        <form onSubmit={handleSubmit}>
            <h2>Build Your Own Pizza</h2>
            <br/>
            <br/>
            <label>
                <section className='green'>
                    Name
                    <h3>required</h3>
                    {errors.length > 6 ? (<p className="error">{errors}</p>) : null}  
                        
                </section>
                <input className='name' name='name' type='text' onChange={handleNameChange}/>
            </label>
            <label>
                <section className='green'>
                    Choice of Size
                    
                    <h3>required</h3>   
                        
                </section>
                <select id="size" name="size" onChange={handleSelectChange}>
        
                    <option value="Small" >Small</option>
                    <option value="Medium" >Medium</option>
                    <option value="Large" >Large</option>
                </select>
            </label>
            <label>
                <section className='green'>
                    Choice of Sauce
                    
                    <h3>required</h3>        
                </section>
                <div className="radio">
                    <label>
                        <input type="radio" value="Original" checked={selectedOption === 'Original'} onChange={handleOptionChange}/>
                        Original Red
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="Garlic" checked={selectedOption === 'Garlic'} onChange={handleOptionChange}/>
                        Garlic Ranch
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="BBQ" checked={selectedOption === 'BBQ'} onChange={handleOptionChange}/>
                        BBQ Sauce
                    </label>
                </div>   
            </label>
            <label>
                <section className='green'>
                    Add Toppings
                    
                    <h3>Choose up to 10</h3>        
                </section>
                <section className='right'>
                    <label>
                    
                        <input
                            name="Pepperoni"
                            type="checkbox"
                            value="Pepperoni"
                            onChange={handleCheckChange}
                        /> 
                        Pepperoni
                    </label>
                    <label>
                    
                        <input
                            name="Sausage"
                            type="checkbox"
                            value="Sausage"
                            onChange={handleCheckChange}
                        /> 
                        Sausage
                    </label>
                    <label>
                    
                    <input
                        name="Canadian"
                        type="checkbox"
                        value="Canadian"
                        onChange={handleCheckChange}
                    /> 
                    Canadian Bacon
                </label>
                <label>
                    
                    <input
                        name="Italian"
                        type="checkbox"
                        value="Italian"
                        onChange={handleCheckChange}
                    /> 
                    Spicy Italian Sausage
                </label>
                <label>
                    
                    <input
                        name="Chicken"
                        type="checkbox"
                        value="Chicken"
                        onChange={handleCheckChange}
                    /> 
                    Grilled Chicken
                </label>
                <label>
                <input
                        name="Onions"
                        type="checkbox"
                        value="Onions"
                        onChange={handleCheckChange}
                    /> 
                    Onions
                </label>
                <label>
                <input
                        name="Pepper"
                        type="checkbox"
                        value="Pepper"
                        onChange={handleCheckChange}
                    /> 
                    Green Pepper
                </label>
                <label>
                <input
                        name="Tomatoes"
                        type="checkbox"
                        value="Tomatoes"
                        onChange={handleCheckChange}
                    /> 
                    Diced Tomatoes
                </label>
                <label>
                <input
                        name="Olives"
                        type="checkbox"
                        value="Olives"
                        onChange={handleCheckChange}
                    /> 
                    Black Olives
                </label>
                <label>
                <input
                        name="Garlic"
                        type="checkbox"
                        value="Garlic"
                        onChange={handleCheckChange}
                    /> 
                    Roasted Garlic
                </label>
                <label>
                <input
                        name="Artichoke"
                        type="checkbox"
                        value="Artichoke"
                        onChange={handleCheckChange}
                    /> 
                    Artichoke Hearts
                </label>
                <label>
                <input
                        name="Cheese"
                        type="checkbox"
                        value="Chees"
                        onChange={handleCheckChange}
                    /> 
                    Three Cheese
                </label>
                <label>
                <input
                        name="Pineapple"
                        type="checkbox"
                        value="Pineapple"
                        onChange={handleCheckChange}
                    /> 
                    Pineapple
                </label>
                <label>
                <input
                        name="ExtraCheese"
                        type="checkbox"
                        value="ExtraCheese"
                        onChange={handleCheckChange}
                    /> 
                    Extra Cheese
                </label>
                
                </section>
            </label>
            <label>
                <section className='green'>
                    Special Instructions
                    
                        
                </section>
                <input className='instruct' type='text' onChange={handleTextChange}/>
            </label>
            <hr></hr>
            <button id='subButt' type='submit'>Order!</button>

        </form>
     
     
        
     
    </>
  );
};
export default Pizza;