import React from 'react'

export default function PizzaForm(props){
   
    const {
       values,
       submit,
       //disabled,
       change,
       errors,
   } = props
 
   const onSubmit = evt => {
       evt.preventDefault()
       submit()
   }
 
   const onChange = evt => {
       const { name, value, type, checked } = evt.target
       const valueToUse = type === 'checkbox' ? checked : value
       change(name, valueToUse)
   }
  
   return(
       
       <form name="pizza-form" onSubmit={onSubmit}>
           <div className="form-header">
               <h1>Build Your Own Pizza</h1>
               <img
               className='home-image'
               src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
               alt=''
               />
           </div>
           <div className="form-container">
               <div>
                   <h2>Build Your Own Pizza</h2>
               </div>
               <div className='size'>
                   <div className="size-header">
                       <h4>Choice of Size</h4>
                       <p>Required</p>
                   </div>
                   <select
                       onChange={onChange}
                       value={values.size}
                       name='size'
                   >
                       <option value=''>-- Select a Size Option --</option>
                       <option value='small'>Small</option>
                       <option value='medium'>Medium</option>
                       <option value='large'>Large</option>
                   </select>
               </div>
               <div className="sauce">
                   <div className="sauce-header">
                       <h4>Choice of Sauce</h4>
                       <p>Required</p>
                   </div>
                   <label>Original Red
                       <input
                       type='radio'
                       name='sauce'
                       value="red"
                       checked={values.sauce === 'red'}
                       onChange={onChange}
                   />
                   </label>
                   <label>Garlic Ranch
                       <input
                       type='radio'
                       name='sauce'
                       value="garlic"
                       checked={values.sauce === 'garlic'}
                       onChange={onChange}
                   />
                   </label>
                   <label>BBQ Sauce
                       <input
                       type='radio'
                       name='sauce'
                       value="bbq"
                       checked={values.sauce === 'bbq'}
                       onChange={onChange}
                   />
                   </label>
                   <label>Spinach Alfredo
                       <input
                       type='radio'
                       name='sauce'
                       value="alfredo"
                       checked={values.sauce === 'alfredo'}
                       onChange={onChange}
                   />
                   </label>
               </div>
               <div className="toppings">
                   <div className="toppings-header">
                       <h4>Choice of Toppings</h4>
                       <p>Required</p>
                   </div>
                   <label>Sausage
                       <input
                       type='checkbox'
                       name='sausage'
                       checked={values.sausage}
                       onChange={onChange}
                       />
                   </label>
                   <label>Pepperoni
                       <input
                       type='checkbox'
                       name='pepperoni'
                       checked={values.pepperoni}
                       onChange={onChange}
                       />
                   </label>
                   <label>Peppers
                       <input
                       type='checkbox'
                       name='peppers'
                       checked={values.peppers}
                       onChange={onChange}
                       />
                   </label>
                   <label>Olives
                       <input
                       type='checkbox'
                       name='olives'
                       checked={values.olives}
                       onChange={onChange}
                       />
                   </label>
               </div>
               <div className="instructions">
                   <div className="instructions-header">
                       <h4>Special Instruction</h4>
                   </div>
                   <input
                   value={values.instructions}
                   onChange={onChange}
                   name='instructions'
                   type='text'
                   />
               </div>
               <div className="name">
                   <div className="name">
                       <h4>Enter your name</h4>
                   </div>
                   <input
                   value={values.name}
                   onChange={onChange}
                   name='name'
                   type='text'
                   />
               </div>
               <div className="orderBtn">
                   <button id="order-button">Add To Order</button>
               </div>
               <div className="errors">
                   <div>{errors.name}</div>
               </div>
           </div>
       </form>
      
 
   )
 
 
 
}
