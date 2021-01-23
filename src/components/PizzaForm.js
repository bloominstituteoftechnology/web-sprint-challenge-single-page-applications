import React, { useState } from 'react';
//import ConfirmPage from './components/ConfirmPage';
import * as yup from 'yup';

//Here outside the function we put the formSchema for validation
let sauceOptions = [
    {
      label: "Dirt",
      value: "dirt",
    },
    {
      label: "Leaves",
      value: "leaves",
    },
    {
      label: "Water",
      value: "water",
    },
    {
      label: "Crushed Obsidian",
      value: "crushed obsidian",
    },
];

  let toppingOptions = [
    {
        label: "Icicles",
        value: "icicles",
    },
    {
        label: "Snow",
        value: "snow",
    },
    {
        label: "Berries",
        value: "berries",
    },
    {
        label: "Rocks",
        value: "rocks",
    },


    
];

export default function PizzaForm () {
//Create State
    const [formState, setFormState] = useState([{
        size: '',
        sauce: '',
        substitute: false,
        person: '',
        instructions: ''
    }]);

    return(
    <>
    <div className='pizza'>
        <h3>Build Your Own Pizza</h3>
        <img src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/56490411_2354982494533034_1379379019702599680_o.jpg?_nc_cat=109&ccb=2&_nc_sid=9267fe&_nc_ohc=WnRekyuCJ3sAX_u-pPo&_nc_ht=scontent-ort2-1.xx&oh=61ba35cbf94c956d9174c9b1aad7d8d7&oe=6032C88E' alt='Ice Pizza' width='500px'/>
    </div>

    <form>
        <label htmlFor='size'>
            Choice of size
                <select 
                    name='size'
                    value={formState.size}
                    //onChange={inputChange}
                >
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                </select>
        </label>
        <br></br>
        <label htmlFor='sauce'>
            Choice of Sauce
                <select 
                    value={formState.sauce}
                    name='sauce'
                    //onChange={inputChange}
                    >   {sauceOptions.map((oneSauce) =>(
                        <option value={oneSauce.value}>{oneSauce.label}</option>
                    ))}
                </select>
        </label>
        <br></br>
       
        <p>Toppings</p>
        {toppingOptions.map(oneOpt =>( 
        <label htmlFor='toggleSwitch' class='toggle-switch-label'>
            {oneOpt.label} : 
                <input 
                    name='toggleSwitch'
                    type='checkbox'
                    value={oneOpt.value}
                    checked={formState.value}
                    //onChange={inputChange}
                />
        </label>))} 
        
        <br></br>            
        <label htmlFor='toggleSwitch' class='toggle-switch-label'>
            Sub Ice for Bark? Check for yes: 
                <input 
                    name='toggleSwitch'
                    type='checkbox'
                    value={formState.substitute}
                    //onChange={inputChange}
                />
        </label>
        <br></br>
        <label htmlFor='instructions'>
            Add Special Instructions: 
                <input 
                    name='instructions'
                    type='text'
                    value={formState.instructions}
                    //onChange={inputChange}
                />
        </label>
        <br></br>

        <div className='person-ordering'>
            <label htmlFor='Person'>
                Your Name: 
                    <input 
                        name='Person'
                        type='text'
                        value={formState.person}
                        //onChange={inputChange}
                    />
            </label>
        </div>
        <button onClick={submitHandler()}>Submit Your Order!</button>
    </form>
    </>
    );
}