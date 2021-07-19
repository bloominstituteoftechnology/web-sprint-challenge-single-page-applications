import React, {useState} from 'react'
import { Form, Button, FormGroup, Label, Input, Row, Col } from 'reactstrap'


const Pizza = () => {

	const [form, setForm] = useState({
		select: '',
		sauce: '',
		checkbox: '',
		submit: ''
	})

	const handleSubmit = e => {
		e.preventDefault()
	}

	const handleChange = e => {
		e.persist()
		const newFormData = {
			...form,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value
		};
		setForm(newFormData)
	}
	return (
		<div className="container">
			<Form onSubmit={handleSubmit}>
				<h1>Build your own Pizza</h1>
				<FormGroup>
					<legend>Select your size</legend>
					<Label for="size">
						<Input type="select" name="select" id="size" onChange={(e) => handleChange(e)}>
							<option>--pick one--</option>
							<option>6 in</option>
							<option>8 in</option>
							<option>12 in</option>
							<option>14 in</option>
						</Input>
					</Label>
				</FormGroup>
				<br />
				<FormGroup>
					<legend>Select your Sauce</legend>
					<FormGroup>
						<Label check>
							<Input type="radio" name="sauce" id="sauce" />{' '}
							Marinara	
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="radio" name="sauce" id="sauce" />{' '}
							BBQ	
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="radio" name="sauce" id="sauce" />{' '}
							Alfredo	
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="radio" name="sauce" id="sauce" />{' '}
							Vodka Sauce	
						</Label>
					</FormGroup>
				</FormGroup>
				<br />
				<FormGroup>
					<legend>Choose your toppings</legend>
					<p>Up to 3</p>
					<Row sm={2} form>
						<Col sm={6}>
					<FormGroup>
						<Label check>
							<Input type="checkbox" name="checkbox" />{' '}
							Chicken 
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="checkbox" />{' '}
							Pineapple 
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="checkbox" />{' '}
							Pepperoni
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="checkbox" />{' '}
							Green Bell Pepper
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="checkbox" />{' '}
							Black Olives
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="checkbox" />{' '}
							Mushrooms
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="checkbox" />{' '}
							Canadian Bacon
						</Label>
					</FormGroup>
					<FormGroup>
						<Label check>
							<Input type="checkbox" />{' '}
							Extra cheese 
						</Label>
					</FormGroup>
				    <FormGroup>
						<Label check>
							<Input type="checkbox" />{' '}
							Spinach
						</Label>
					</FormGroup>
						</Col>
					</Row>
				</FormGroup>
				<br />
				<Button type="submit" name="submit" color="btn btn-primary">Order</Button>
			</Form>
		</div>
	)
}

export default Pizza