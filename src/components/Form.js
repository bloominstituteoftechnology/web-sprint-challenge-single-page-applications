import React from "react";
import image from './Pizza.jpg'

export default function Form(props){
    const{values, onInputChange, onCheckboxChange, onSubmit} = (props)

    const makeStyle = () =>{
        return {
            img:{
                width: '50%',
                height: '50%',
            },
        }
    }     


    return (
        <form onSubmit={onSubmit} >
            <div className='bigContainer'>
                <div className='header'>
                    <h1>Build Your Own Pizza</h1>
                    <img
                    style={makeStyle().img}
                    alt='thumbnail-post'
                    src={image}
                />
                </div>
              <h2>Build Your Own Pizza </h2>
              <div>
                  <label> Name:&nbsp;
                      <input
                      type='text'
                      name='name'
                      value={values.name}
                      onChange={onInputChange}
                      />
                  </label>
              </div>
              <div className='sizeContainer'>
                <label> Choice of Size:&nbsp;
                        <select
                        name='size'
                        values={values.size}
                        onChange={onInputChange}
                        >
                        <option>Select</option>
                        <option value='small'> Small </option>
                        <option value ='medium'> Medium </option>
                        <option value='large'> Large</option>
                        </select>
                </label>
              </div>
              <div>
                <label>  Choice of Sauce:&nbsp;
                    <label> Original Red:&nbsp;
                    <input
                        checked={values.sauce === 'originalRed'}
                        values='originalRed'
                        onChange={onInputChange}
                        name='sauce'
                        type='radio'
                    />
                    </label>
                <label> Garlic Ranch:&nbsp;
                   <input
                  
                  checked={values.sauce === 'garlicRanch'}
                  values='garlicRanch'
                  onChange={onInputChange}
                  name='sauce'
                  type='radio' 

                  />
                  </label>
                 <label> BBQ Sauce:&nbsp;
                   <input

                        checked={values.sauce === 'BBQ'}
                        values='BBQ'
                        onChange={onInputChange}
                        name='sauce'
                        type='radio'
                  />
                </label>
              </label> 
              </div>
              <div className='toppingsContainer'>
                <h3>Add Topping </h3>
                    <label>Pepperoni
                        <input
                            name='pepperoni'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.pepperoni}
                        />
                    </label>
                    <label>Sausage
                        <input
                            name='sausage'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.sausage}
                        />
                    </label>
                    <label>Onions
                        <input
                            name='onions'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.onions}
                        />
                    </label>
                    <label>Pineapple
                        <input
                            name='pineapple'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.pineapple}
                        />
                    </label>
               
             </div>
            <div className='instructions'>
              <label>Specail Intructions:&nbsp;
                  <input
                   type='text'
                    name='specail'
                    value={values.specail}
                    onChange={onInputChange}
                  />
              </label>
            </div>
            <button> Add To Order </button>
            </div>
        </form>
    )
}