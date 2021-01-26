import React from 'react';


//Styling
import  styled  from 'styled-components'

const PizzaContainer = styled.div`
    padding:10 px;
    margin: 0 auto:
    justify-content: space-between;

`


export default function Pizza (props) {
    //Props
    const { form, setForm, disabled, errors, setErrors, orders, setOrders } = props


    //change function
    const onChange = e =>{

        const { checked, type, name, value } = e.target
        
        // //indicates unique checkbox feature that says 'if the type is a checkbox, checked populate, otherwise it will go back to the original state (false)'
        const valueToUse = type === 'checkbox' ? checked : value
        
        setForm({...form, [name]: valueToUse})

        setErrors(name, value)
    }

    const onSubmit = e => {

        console.log('Hello on Submit')
        e.preventDefault();
        
       const newOrder = { name: form.name.trim(), pSize: form.pSize, pepporoni: form.pepporoni, cheese: form.cheese, bacon: form.bacon, pineapple: form.pineapple, spInstructions: form.spInstructions }
        
       setOrders([...orders, newOrder])
       setForm({
        name: '',
        pSize:'',
        pepporoni: false,
        cheese: false,
        bacon: false,
        pineapple: false,
        spInstructions:'',
       })

    }



    return (
    <PizzaContainer>
    <form className='form-container' onSubmit={onSubmit}>
        <div>
        <h2>Place Your Order</h2>
            <label>Name 
                <input
                    name='name'
                    type='text'
                    placeholder='Enter Name'
                    maxLength='30'
                    value={form.name}
                    onChange={onChange}/>
            </label>
            
                <div>{errors.name}</div>
            
            <br/>
            <label>Pizza Size
                <select value={form.pSize} name='pSize' onChange={onChange}>
                    <option value=''>---Select a Pizza Size---</option>
                    <option value='10 inches'>10 inches</option>
                    <option value='14 inches'>14 inches</option>
                    <option value='16 inches'>16 inches</option>
                    <option value='18 inches'>16 inches</option>
                </select>
            </label>
            <div>{errors.pSize}</div>
            <br/>
            <div>
                <h3>Choose your Toppings</h3>
                <label>Pepperoni
                    <input
                        key={0}                                                     
                        name="pepporoni"
                        type="checkbox"
                        checked={form.pepporoni}
                        onChange={onChange}/>
                </label>
                <label>Cheese
                    <input  
                        key={1}                                                   
                        name="cheese"
                        type="checkbox"
                        checked={form.cheese}
                        onChange={onChange}/>
                </label>
                <label>Bacon
                    <input    
                        key={2}                                                 
                        name="bacon"
                        type="checkbox"
                        checked={form.bacon}
                        onChange={onChange}/>
                </label>
                <label>Pineapple
                    <input   
                        key={3}                                                  
                        name="pineapple"
                        type="checkbox"
                        checked={form.pineapple}
                        onChange={onChange}/>
                </label>
                <br/>
            </div>
            <label>Special Instructions 
                <input
                    name='spInstructions'
                    type='text'
                    placeholder='enter instructions'
                    maxLength='60'
                    value={form.spInstructions}
                    onChange={onChange}/>
            </label>
            <br/>
           


        <div>
            <button disabled={disabled}>Order</button>
        </div>
        </div>
    </form>
    </PizzaContainer>        
    );

}