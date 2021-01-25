import React from 'react'




export default function Pizza (props) {
    //Props
    const { form, setForm, submit, disabled, errors, setErrors } = props


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
        
        //submitForm function from App
        submit();
    }



    return (
    <form className='form-container' onSubmit={onSubmit}>
        <div>
            
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
            <div>
                <h2>Choose your Toppings</h2>
                <label>Pepperoni
                    <input                                                     
                        name="pepporoni"
                        type="checkbox"
                        checked={form.pepporoni}
                        onChange={onChange}/>
                </label>
                <label>Cheese
                    <input                                                     
                        name="cheese"
                        type="checkbox"
                        checked={form.cheese}
                        onChange={onChange}/>
                </label>
                <label>Bacon
                    <input                                                     
                        name="bacon"
                        type="checkbox"
                        checked={form.bacon}
                        onChange={onChange}/>
                </label>
                <label>Pineapple
                    <input                                                     
                        name="pineapple"
                        type="checkbox"
                        checked={form.pineapple}
                        onChange={onChange}/>
                </label>

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

    );

}