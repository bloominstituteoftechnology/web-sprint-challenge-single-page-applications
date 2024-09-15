import React, { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';
import styled from "styled-components"
import schema from "./Schema"
import * as yup from "yup"
import HomeP from './HomeP'

const FormDiv = styled.div`
`

const Form = () => {

	const formObj = {
		name: '',
		size: 'medium',
		pineapple: false,
		ham: false,
		onion: false,
		specialInfo: ''
	}

	const errorsObj = {
		name: '',
		size: '',
		pineapple: '',
		ham: '',
		onion: '',
		specialInfo: ''
	}

	const [form, setForm] = useState(formObj);
	const [errors, setErrors] = useState(errorsObj);

	const [user, setUser] = useState({setForm});

	const submit = (event) => {
		event.preventDefault();

		const newUser = {
			name: form.name,
			size: form.size,
			pineapple: form.pineapple,
			ham: form.ham,
			onion: form.onion,
			specialInfo: form.specialInfo
		}

		axios.post('https://reqres.in/api/users', newUser)
			.then((result) => {
				setForm(formObj);
				setUser(newUser);
			})
			.catch((error) => {
				console.log("something went wrong: ", error);
			})
	}

	const setFormErrors =(name, value) => {
		yup.reach(schema, name).validate(value)
		.then(() => setErrors({ ...errors, [name]: '' }))
		.catch((error) => setErrors({ ...errors, [name]: error.errors[0] }))
	}

	const changeHandler = (event) => {
		const { checked, value, name, type } = event.target
    	const valueToUse = type === 'checkbox' ? checked : value
    	setFormErrors(name, valueToUse)
    	setForm({ ...form, [name]: valueToUse})
	}

	return (
		<>
		<HomeP>
		<div className='HeaderContainer'>
              <div className='Logo'>
                <h1>Lambda Eats</h1>
              </div>
              <div className='Navigation'>
                <Link to='/'>
                  Home
                </Link>
                <Link to='/Pizza'>
                  Form
                </Link>
              </div>
            </div>
		</HomeP>

		<FormDiv>
			<form onSubmit={submit} >
				<div>
					<label>
						Name: 
						<input onChange={changeHandler}
						 	value={form.value}
						  	type='text'
						   	name="name"/>
					</label>
				</div>

				<div>
					<label>
						Pizza size:
						<select onChange={changeHandler} value={form.size} name="size">
							<option value='none'>Select yummy size</option>
							<option value='SM'>Small</option>
							<option value='M'>Medium</option>
							<option value="L">Large</option>
							<option value='XL'>ExtraLarge</option>
							<option value='HS'>Half Sheet</option>
						</select>
					</label>
				</div>

				<div>
					<label>
						Pineapple:
						<input
						 	onChange={changeHandler}
						  	value={form.value}
						  	type='checkbox'
						    name="pineapple"/>
					</label>
					<label>
						Ham:
						<input 
							onChange={changeHandler}
						 	value={form.value} 
						 	type='checkbox' 
						 	name="ham"/>
					</label>
					<label>
						Onion:
						<input 
							onChange={changeHandler}
							value={form.value}
							type='checkbox' 
							name="onion"/>
					</label>
				</div>

				<div>
					<label>
						Special instructions:
						<input onChange={changeHandler}
						 	value={form.specialInfo}
							placeholder="add some extra suggestions"
							type="textarea"
							name='specialInfo'/>
					</label>
				</div>

				<button name="button">Submit an order!</button>

				<div class='data-container'>
					<h2>{user.name} Order</h2>
					<p>Size: {user.size}</p>
					<p>Pineapple: {user.pineapple === true ? "+" : "skip"}</p>
					<p>Ham: {user.ham === true ? "+" : "skip"}</p>
					<p>Onion: {user.onion === true ? "+" : "skip"}</p>
					<p>Special instructions: {user.specialInfo}</p>
				</div>

			</form>
		</FormDiv>
		</>
	)
}


export default Form; 