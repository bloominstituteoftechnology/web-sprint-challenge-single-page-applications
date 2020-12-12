import React, {useState} from "react";
import {useHistory} from "react-router-dom"

const Pizza = (props) => {
    let history = useHistory()
    const [form, setForm] = useState({
        name: '',
        sauce: 'red',
        quantity: '1',

    })
    const handleCheckbox = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }
    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <h2>Build Your Pizza</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(form)
                props.setOrder(form)
                history.push('/confirmation')
            }}>
                <input required onChange={handleForm} value={form.name}
                    type='text'
                    name='name'
                    placeholder='Name'
                    min={2}
                />
                <h3>Size</h3>
                <p>*Required*</p>
                <select required name="size" placeholder="Select Size" onChange={handleForm}>
                    <option value='small'>petite</option>
                    <option value='medium'>normie</option>
                    <option value='large'>single men</option>
                    <option value='xl'>sweaty coders</option>
                </select>
                <h3>Sauce</h3>
                <p>*Required*</p>
                <input onChange={handleForm}
                    type='radio'
                    name='sauce'
                    value='red'
                    id='red-sauce'
                    checked={form.sauce==='red'}
                />
                <label htmlFor='red-sauce'>Red Sauce</label>
                <input onChange={handleForm}
                    type='radio'
                    name='sauce'
                    value='white'
                    id='white-sauce'
                    checked={form.sauce==='white'}
                />
                <label htmlFor='white-sauce'>White Sauce</label>
                <h3>Toppings</h3>
                <input onChange={handleCheckbox}
                    type='checkbox'
                    name='pepperoni'
                    value='pepperoni'
                    checked={form.pepperoni==true}
                />
                <label htmlFor='pepperoni'>Pepperoni</label>
                <input onChange={handleCheckbox}
                    type='checkbox'
                    name='salami'
                    value='salami'
                    checked={form.salami==true}
                />
                <label htmlFor='salami'>Salami</label>
                <input onChange={handleCheckbox}
                    type='checkbox'
                    name='olives'
                    value='olives'
                    checked={form.olives==true}
                />
                <label htmlFor='olives'>Olives</label>
                <input onChange={handleCheckbox}
                    type='checkbox'
                    name='onions'
                    value='onions'
                    checked={form.onions==true}
                />
                <label htmlFor='onions'>Onions</label>
                <h3>Quantity</h3>
                <input onChange={handleForm}
                    type='number'
                    name='quantity'
                    min={1}
                    value={form.quantity}
                />
                <h3>Special Instructions</h3>
                <input  onChange={handleForm}
                    type='text'
                    name='instructions' 
                    placeholder='Instructions'
                />
                <button>Submit Order</button>
            </form>
        </div>
    );
};
export default Pizza;