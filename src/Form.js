import React from 'react'

function Form (props){

const { values, update, submit } = props

const onChange = evt => {

var name = evt.target.name
var value;
if(evt.target.type==="checkbox")
{
    
    value=evt.target.checked
}
else{
    value = evt.target.value
}
console.log(name+value);
update(name, value)
}
const onSubmit = evt => {
evt.preventDefault()
submit()
}
var price=0;


return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Build Your Own Pizza</h2>
      </div>




        <div className="Label">
            <h2>Choise of Size</h2>
            <p>Required*</p>
        </div>

          <select name='size' value={values.role} onChange={onChange}>
            <option disabled selected value=''>Select size</option>

            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            
          </select>



          <div className="Label">
            <h2>Choise of Sauce</h2>
            <p>Required*</p>
        </div>
        

        <div onChange={onChange} id="radio">
            <input type="radio" value="Original Red" name="sauce" /> Original Red
            <input type="radio" value="Garlic Ranch" name="sauce" /> Garlic Ranch
            <input type="radio" value="BBQ Sauce" name="sauce" /> BBQ Sauce
        </div>


        <div className="Label">
            <h2>Add Toppings</h2>
        </div>

        <div>
          {values.toppings.map((t)=>{
          return(


          <div class='check'>
              <a>{t.value}</a> 

              <input 
              type="checkbox"
              id={t.id}
              value={t.value} 
              name={t.value.replace(/\s/g, '')}
              onChange={onChange}/> 
          </div>
          )})}
        </div>

        <div className="Label">
            <h2>Special Instructions</h2>
        </div>
        

        <textarea
            name='note'
            type='text'
            placeholder='Anything else you would like to add?'
            maxLength='500'
           
            value={values.note}
            onChange={onChange}
          />


          <div className="Label">
            <h2>Order Name</h2>
        </div>


        <input
            name='name'
            type='text'
            placeholder='Enter Name'
            maxLength='18'
            minLength="2"
           
            value={values.name}
            onChange={onChange}
          />

          <button class="orderb">Add to order</button>
    </form>
  )}

export default Form
