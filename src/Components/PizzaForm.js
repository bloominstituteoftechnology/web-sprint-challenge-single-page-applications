import React from 'react';
import PizzaImage from '../Assets/Pizza.jpg'

export default function PizzaForm(props){
    const {values, change, submit, disabled, errors} = props;

    const onSubmit = (evt) =>{
        evt.preventDefault();
        submit();
    }

    const onChange = (evt) =>{
        const { name, value, type, checked } = evt.target;
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
        
        </div>
        </form>



    )
}