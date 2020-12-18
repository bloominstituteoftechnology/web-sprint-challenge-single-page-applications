import React from 'react';
import PizzaImage from '../Assets/Pizza.jpg'

export default function PizzaForm(props){
    const {values, change, submit, disabled, errors} = props;

    const onSubmit = (evt) =>{
        evt.preventDefault();
        submit();
    }

    const onChange = (evt) =>{
        const { name, value, type, checked, submit } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        change( name, valueToUse)
    }


    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <div className='title'>
                    <h1>Build Your Own Pizza</h1>
                    <img src={PizzaImage} alt='Pizza' />
                </div>

                <div>Build Your Own Pizza</div>                

                <div className='sizeChoice'>
                    <h2>Choice of Size</h2>
                    <p>Required</p>
                    <p>{errors.size}</p>
                    <label>
                        <select value={values.size} name='size' onChange={onChange}>
                            <option value=''>--Select--</option>
                            <option value='small' name ='small'>Small</option>
                            <option value='medium' name ='medium'>Medium</option>
                            <option value='large' name ='large'>Large</option>
                            <option value='x-large' name ='x-large'>X-Large</option>

                        </select>
                    </label>
                </div>

                <div className='toppings'>
                    <h2>Add Toppings</h2>
                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            checked={values.pepperoni}
                            name='pepperoni'
                            onChange={onChange}
                        />
                    </label>

                    <label>Jalapeno
                        <input 
                            type='checkbox'
                            checked={values.jalapeno}
                            name='jalapeno'
                            onChange={onChange}
                        />
                    </label>

                    <label>Bacon
                        <input 
                            type='checkbox'
                            checked={values.bacon}
                            name='bacon'
                            onChange={onChange}
                        />
                    </label>

                    <label>Green Pepper
                        <input 
                            type='checkbox'
                            checked={values.greenPepper}
                            name='greenPepper'
                            onChange={onChange}
                        />
                    </label>

                    <label>Italian Sausage
                        <input 
                            type='checkbox'
                            checked={values.italianSausage}
                            name='italianSausage'
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div>
                    <h2>Special Instructions</h2>
                        <label>
                            <input 
                                type='text'
                                checked={values.specialInstructions}
                                name='specialInstructions'
                                onChange={onChange}
                            />
                        </label>
                </div>

                <div className='name'>
                <p>{errors.name}</p>
                    <label>Name
                        <input 
                            name='name'
                            type='text'
                            maxLength='30'
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                </div>
                
                <div className='checkout'>
                    <button id='orderBtn' disabled={disabled}>Add to Order</button>
                </div>
            
            </div>
        </form>



    )
}