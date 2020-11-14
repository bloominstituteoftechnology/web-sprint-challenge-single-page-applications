import React from 'react';
// import pizzaImage from'.../Assets/Pizza.jpg';
import pizzaImage from '../Assets/Pizza.jpg'


export default function PizzaForm(props){

    const { values, change, order, disabled } = props;

    const onChange = (evt) =>{
        const { name, value, type, checked, submit } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = evt =>{
        evt.preventDefault();
        order();
    }

    return(
        <form onSubmit={onSubmit}>
            <div className='header'>
                <h1>Lambda Eats</h1>

            </div>
            <div className='form'>
                <h2>Build Your Own Pizza</h2>
                <img src={pizzaImage}
                    alt='Create your own pizza' />
            </div>
            <div>Build Your Own Pizza</div>

            <div className='sizeChoice'>
                <h3>Choice of Size</h3>
                <p>Required</p>
                <label>
                    <select value={values.size} name='size' onChange={onChange}>
                        <option value=''>Select</option>
                        <option value='small' name='small'>Small</option>
                        <option value='medium' name='medium'>Medium</option>
                        <option value='large' name='large'>Large</option>
                        <option value='x-large' name='x-large'>X-Large</option>
                    </select>
                </label>
            </div>

            

            <div className='toppings'>
                <h3>Add Topings</h3>
                
                <div>
                <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>

            

                <label>Grilled Chicken
                    <input 
                        type='checkbox'
                        name='grilledChicken'
                        onChange={onChange}
                        checked={values.grilledChicken}
                    />
                </label>

        

                <label>Green Pepper
                    <input 
                        type='checkbox'
                        name='greenPepper'
                        onChange={onChange}
                        checked={values.greenPepper}
                    />
                </label>

                <label>Pinapple
                    <input 
                        type='checkbox'
                        name='pineapple'
                        onChange={onChange}
                        checked={values.pineapple}
                    />
                </label>

               
                </div>
            </div>
            <div className='substitute'>
                <h3>Choice of Substitute</h3>
                <div>
                    <label>Gluten Free Extra Crust(+ $1.00)
                        <input 
                            type='checkbox'
                            name='glutenfree'
                            onChange={onChange}
                        />
                    </label> 
                </div>

                <div className='specialInstuctions'>
                    <h3>Special Instructions</h3>
                    <label>
                        <input 
                            name='specialInstruction'
                            value={values.specialInstruction}
                            type='text'
                            maxLength='1000'
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div className='name'>
                <label>Name
                <input 
                    name='name'
                    type='text'
                    maxLength='20'
                    value={values.name}
                    onChange={onChange}
                />
            </label>
                </div>

                <div className='checkout'>
                    
                    <button id='orderButton' >Add To Order</button>
                </div>
            </div>
        </form>
    )
}