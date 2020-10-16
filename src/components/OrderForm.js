import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import * as yup from 'yup';
import schema from '../validation/formSchema';

const StyledOrderForm = styled.form`
	border: 1px solid red;
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	width: 70%;
	margin: 0 auto;
	/* justify-content: center; */

	.form-section {
		border: 1px solid blue;
		display: flex;
		flex-flow: column nowrap;
		margin-bottom: 2%;
	}
`;

const initialFormValues = {
	name: '',
	size: '',
	sauce: '',
	pepperoni: false,
	sausage: false,
	canadianBacon: false,
	spicyItalianSausage: false,
	grilledChicken: false,
	onions: false,
	greenPepper: false,
	dicedTomatoes: false,
	blackOlives: false,
	roastedGarlic: false,
	artichokeHearts: false,
	threeCheese: false,
	pineapple: false,
	extraCheese: false,
	glutenFreeCrust: false,
	specialInstructions: '',
};
const initialOrder = [];
const initialDisabled = true;

export default function OrderForm(props) {
	const { values, submit, change, errors } = props;

	const [order, setOrder] = useState(initialOrder);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const onChange = (evt) => {
		const { name, value, type, checked } = evt.target;
		const valueToUse = type === 'checkbox' ? checked : value;
		change(name, valueToUse);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	};

	return (
		<StyledOrderForm onSubmit={onSubmit}>
			<div className='form-section'>
				<h4>Build Your Own Pizza</h4>
				<img />
				<h2>Build Your Own Pizza</h2>
			</div>

			{/* 📣 NAME */}
			<div className='form-section'>
				<h3>Name for Order</h3>
				<input
					type='text'
					name='name'
					value={values.name}
					onChange={onChange}
					placeholder='Name'
				/>
			</div>

			{/* 📣 CHOICE OF SIZE */}
			<div className='form-section'>
				<label>
					<h3>Choice of Size</h3>
					<p>Required</p>
					<select onChange={onChange} value={values.size} name='size'>
						<option value=''>Select</option>
						<option value='small'>Small</option>
						<option value='medium'>Medium</option>
						<option value='large'>Large</option>
					</select>
				</label>
			</div>

			{/* 📣 CHOICE OF SAUCE */}
			<div className='form-section'>
				<h3>Choice of Sauce</h3>
				<p>Required</p>
				<label>
					Original Red
					<input
						type='radio'
						name='sauce'
						value='originalRed'
						checked={values.sauce === 'originalRed'}
						onChange={onChange}
					/>
				</label>
				<label>
					Garlic Ranch
					<input
						type='radio'
						name='sauce'
						value='garlicRanch'
						checked={values.sauce === 'garlicRanch'}
						onChange={onChange}
					/>
				</label>
				<label>
					BBQ Sauce
					<input
						type='radio'
						name='sauce'
						value='bbqSauce'
						checked={values.sauce === 'bbqSauce'}
						onChange={onChange}
					/>
				</label>
				<label>
					Spinach Alfredo
					<input
						type='radio'
						name='sauce'
						value='spinachAlfredo'
						checked={values.sauce === 'spinachAlfredo'}
						onChange={onChange}
					/>
				</label>
			</div>

			{/* 📣 ADD TOPPINGS */}
			<div className='form-section'>
				<h3>Add Toppings</h3>
				<p>Choose up to 10</p>
				<label>
					<input
						type='checkbox'
						name='pepperoni'
						checked={values.pepperoni}
						onChange={onChange}
					/>
					Pepperoni
				</label>
				<label>
					<input
						type='checkbox'
						name='sausage'
						checked={values.sausage}
						onChange={onChange}
					/>
					Sausage
				</label>
				<label>
					<input
						type='checkbox'
						name='canadianBacon'
						checked={values.canadianBacon}
						onChange={onChange}
					/>
					Canadian Bacon
				</label>
				<label>
					<input
						type='checkbox'
						name='spicyItalianSausage'
						checked={values.spicyItalianSausage}
						onChange={onChange}
					/>
					Spicy Italian Sausage
				</label>
				<label>
					<input
						type='checkbox'
						name='grilledChicken'
						checked={values.grilledChicken}
						onChange={onChange}
					/>
					Grilled Chicken
				</label>
				<label>
					<input
						type='checkbox'
						name='onions'
						checked={values.onions}
						onChange={onChange}
					/>
					Onions
				</label>
				<label>
					<input
						type='checkbox'
						name='greenPepper'
						checked={values.greenPepper}
						onChange={onChange}
					/>
					Green Pepper
				</label>
				<label>
					<input
						type='checkbox'
						name='dicedTomatoes'
						checked={values.dicedTomatoes}
						onChange={onChange}
					/>
					Diced Tomatoes
				</label>
				<label>
					<input
						type='checkbox'
						name='blackOlives'
						checked={values.blackOlives}
						onChange={onChange}
					/>
					Black Olives
				</label>
				<label>
					<input
						type='checkbox'
						name='roastedGarlic'
						checked={values.roastedGarlic}
						onChange={onChange}
					/>
					Roasted Garlic
				</label>
				<label>
					<input
						type='checkbox'
						name='artichokeHearts'
						checked={values.artichokeHearts}
						onChange={onChange}
					/>
					Artichoke Hearts
				</label>
				<label>
					<input
						type='checkbox'
						name='threeCheese'
						checked={values.threeCheese}
						onChange={onChange}
					/>
					Three Cheese
				</label>
				<label>
					<input
						type='checkbox'
						name='pineapple'
						checked={values.pineapple}
						onChange={onChange}
					/>
					Pineapple
				</label>
				<label>
					<input
						type='checkbox'
						name='extraCheese'
						checked={values.extraCheese}
						onChange={onChange}
					/>
					Extra Cheese
				</label>
			</div>

			{/* 📣 CHOICE OF SUBSTITUTE*/}
			<div className='form-section'>
				<h3>Choice of Substitute</h3>
				<p>Choose up to 1</p>
				<label>
					<input
						type='checkbox'
						name='glutenFreeCrust'
						checked={values.glutenFreeCrust}
						onChange={onChange}
					/>
					Gluten Free Crust (+ $1.00)
				</label>
			</div>

			{/* 📣 SPECIAL INSTRUCTIONS*/}
			<div className='form-section'>
				<h3>Special Instructions</h3>
				<input
					type='text'
					name='specialInstructions'
					placeholder="Anything else you'd like to add?"
				/>
			</div>

			{/* 📣 VALIDATION ERRORS */}
			<div className='form-section errors'>
				<div>{errors.name}</div>
				<div>{errors.size}</div>
				<div>{errors.sauce}</div>
			</div>

			{/* 📣 ORDER BUTTON*/}
			<div className='form-section'>
				<button disabled={disabled}>Add to Order</button>
			</div>
		</StyledOrderForm>
	);
}
