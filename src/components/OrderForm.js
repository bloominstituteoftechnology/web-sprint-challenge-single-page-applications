import React from 'react';

export default function OrderForm(props) {
	const { values, submit, change, disabled, errors } = props;
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
		<div>
			<div className='form-section'>
				<h4>Build Your Own Pizza</h4>
				{/* <img /> */}
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
			</div>

			{/* 📣 ADD TOPPINGS */}
			<div className='form-section'>
				<h3>Add Toppings</h3>
				<p>Choose any you would like</p>
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
						name='Bacon'
						checked={values.Bacon}
						onChange={onChange}
					/>
					Bacon
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
						name='extraCheese'
						checked={values.extraCheese}
						onChange={onChange}
					/>
					Extra Cheese
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
		</div>
	);
}
