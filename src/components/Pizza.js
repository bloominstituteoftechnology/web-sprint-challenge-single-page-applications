import React, {useState} from 'react'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap'
import * as yup from 'yup'


const Pizza = () => {
	//this holds the hooks for every input type

	const [form, setForm] = useState({
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

	const [errors, setErrors] = useState({
		size: '',
		sauce: '',
		submit: ''
	})

	//this schema handles what is required and not required in my form
	const formSchema = yup.object().shape({

	})


	//this makes it so that the button is disabled until the entire form is good
	const [buttonDisabled, setButtonDisabled] = useState(true)

	const handleSubmit = e => {
		e.preventDefault()
	}

	//this handles the interaction of the user and every time they click on a button or an option
	const handleChange = e => {
		e.persist()
		const newFormData = {
			...form,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value
		};
		setForm(newFormData)
		console.log(newFormData)
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
								onChange={(e) => handleChange(e)} />
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
			</Form>
		</div>
	)
}

export default Pizza