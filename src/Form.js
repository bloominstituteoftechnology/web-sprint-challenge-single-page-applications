import React from 'react'

export default function Form (props) {
    //Props
    // const { values, update, submit } = props


    // //change function
    // const onChange = e =>{

    //     const name = e.target.name;
    //     const value = e.target.value;

    //     //update form
    //     update(name, value)

    // }

    // const onSubmit = e => {

    //     console.log('Hello on Submit')
    //     e.preventDefault();
        
    //     //submitForm function from App
    //     submit();
    // }



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
            <br/>
            <label>Pizza Size
                <select value={form.psize} name='pizza size' onChange={onChange}>
                    <option value=''>---Select a Pizza Size---</option>
                    <option value='10 inches'>10 inches</option>
                    <option value='14 inches'>14 inches</option>
                    <option value='16 inches'>16 inches</option>
                    <option value='18 inches'>16 inches</option>
                </select>
            </label>
            <label>Toppings
                <input                                                     
                    name="toppings"
                    type="checkbox"
                    checked={form.toppings}
                    onChange={change}
                />
            </label>
            <label>Special Instructions 
                <input
                    name='special instructions'
                    type='text'
                    placeholder='enter instructions'
                    maxLength='60'
                    value={form.specInstructions}
                    onChange={onChange}/>
            </label>
            <br/>
           


        <div>
            <button disabled={!form.name || !form.psize || !form.toppings || !form.specInstructions}>Order</button>
        </div>
        </div>
    </form>

)

}