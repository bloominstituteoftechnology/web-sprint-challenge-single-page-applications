import React, { useState, useEffect } from 'react'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'
import * as yup from 'yup'
import axios from 'axios'


const Pizza = () => {
	//this holds the hooks for every input type

	const [order, setOrder] = useState([])

	const [form, setForm] = useState({
		size: '',
		sauce: '',
		chicken: '',
		pineapple: '',
		pepperoni: '',
		pepper: '',
		mushrooms: '',
		canadian: '',
		submit: ''
	})

	const [errors, setErrors] = useState({
		size: '',
		sauce: '',
		chicken: '',
		pineapple: '',
		pepperoni: '',
		pepper: '',
		mushroom: '',
		canadian: '',
		submit: ''
	})

	//this schema handles what is required and not required in my form
	const formSchema = yup.object().shape({
		size: yup.string().oneOf(['6in', '8in', '12in', '14in']).required('Please select a size'),
		sauce: yup.string().oneOf(['marinara', 'bbq', 'alfredo', 'vodka']).required('Please select a sauce'),
		chicken: yup.bool(),
		pineapple: yup.bool().oneOf([true,false]),
		pepperoni: yup.bool().oneOf([true,false]),
		pepper: yup.bool().oneOf([true]),
		mushrooms: yup.bool().oneOf([true]),
		canadian: yup.bool().oneOf([true]),

	})

	useEffect(() => {
		formSchema.isValid(form).then((valid) => {
			setButtonDisabled(!valid)
		})
	})

	const validateData = e => {
		yup
			.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: ''
				})
			})
			.catch((err) => {
				setErrors({
					...errors, [e.target.name]: err.errors[0]
				});
		})
	}

	//this makes it so that the button is disabled until the entire form is good
	const [buttonDisabled, setButtonDisabled] = useState(true)

	const handleSubmit = e => {
		e.preventDefault()
		axios
			.post('https://reqres.in/api/users', form)
			.then((res) => {
				setOrder(res.data)
				setForm({
					size: '',
					sauce: '',
					chicken: '',
					pineapple: '',
					pepperoni: '',
					pepper: '',
					mushrooms: '',
					canadian: '',
					submit: ''
				})
			})
	}

	//this handles the interaction of the user and every time they click on a button or an option
	const handleChange = e => {
		e.persist()
		const newFormData = {
			...form,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value
		};
		validateData(e)
		setForm(newFormData)
		
	}
	return (
		<div className="container">
			<Form onSubmit={handleSubmit}>
				<h1>Build your own Pizza</h1>
				<FormGroup>
					<legend>Select your size</legend>
					<Label for="size">
						<Input
							type="select"
							name="size"
							id="size"
							value={form.size}
							onChange={(e) => handleChange(e)}
						>
							<option value="">--pick one--</option>
							<option value="6in">6 in</option>
							<option value="8in">8 in</option>
							<option value="12in">12 in</option>
							<option value="14in">14 in</option>
						</Input>
					</Label>
				</FormGroup>
				<br />
				<FormGroup>
					<legend>Select your Sauce</legend>
					<FormGroup>
						<Label check>
							<Input
								checked={form.sauce === 'marinara'}
								value="marinara"
								type="radio"
								name="sauce"
								id="sauce"
								onChange={(e) => handleChange(e)} />
							{' '}
							Marinara	
						</Label>
					</FormGroup>

					<FormGroup>
						<Label check>
							<Input
								checked={form.sauce === 'bbq'}
								value="bbq" type="radio"
								name="sauce"
								id="sauce"
								onChange={(e) => handleChange(e)} />
							{' '}
							BBQ	
						</Label>
					</FormGroup>

					<FormGroup>
						<Label check>
							<Input
								checked={form.sauce === 'alfredo'}
								value="alfredo"
								type="radio"
								name="sauce"
								id="sauce"
								onChange={(e) => handleChange(e)} />
							{' '}
							Alfredo	
						</Label>
					</FormGroup>

					<FormGroup>
						<Label check>
							<Input
								checked={form.sauce === 'vodka'}
								value="vodka"
								type="radio"
								name="sauce"
								id="sauce"
								onChange={(e) => handleChange(e)} />
							{' '}
							Vodka Sauce	
						</Label>
					</FormGroup>
				</FormGroup>
				<br />
				<FormGroup>
					<legend>Choose your toppings</legend>
					<p>Up to 2</p>
					
					<FormGroup>
						<Label check>
							<Input
								type="checkbox"
								name="chicken"
								value={form.chicken}
								onChange={(e) => handleChange(e)} />
							{' '}
							Chicken 
						</Label>
					</FormGroup>

					<FormGroup>
						<Label check>
							<Input
								type="checkbox"
								name="pineapple"
								onChange={handleChange} />
							{' '}
							Pineapple 
						</Label>
					</FormGroup>

					<FormGroup>
						<Label check>
							<Input
								type="checkbox"
								name="pepperoni"
								onChange={(e) => handleChange(e)} />
							{' '}
							Pepperoni
						</Label>
					</FormGroup>

					<FormGroup>
						<Label check>
							<Input
								type="checkbox"
								name="pepper"
								onChange={(e) => handleChange(e)} />
							{' '}
							Green Bell Pepper
						</Label>
					</FormGroup>

					<FormGroup>
						<Label check>
							<Input
								type="checkbox"
								name="mushrooms"
								onChange={(e) => handleChange(e)} />
							{' '}
							Mushrooms
						</Label>
					</FormGroup>

					<FormGroup>
						<Label check>
							<Input
								type="checkbox"
								name="canadian"
								onChange={(e) => handleChange(e)} />
							{' '}
							Canadian Bacon
						</Label>
					</FormGroup>
				</FormGroup>
				<br />
				<Button disabled={buttonDisabled} type="submit" name="submit" color="btn btn-primary">Order</Button>
				<pre>{JSON.stringify(order, null, 2)}</pre>
			</Form>
		</div>
	)
}

export default Pizza