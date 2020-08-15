import React, { useState, useEffect } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Pizza from './components/Pizza';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './components/formSchema';

const initialFormValues = {
	name: '',
	size: '',
	gluten: 'no',
	toppings: {
		pineapple: false,
		sausage: false,
		ham: false,
		cheese: false,
	},
	special: '',
};

const App = () => {
	const [formValues, setFormValues] = useState(initialFormValues);
	const [orders, setOrders] = useState([]);
	const [formErrors, setFormErrors] = useState('');
	const [disabled, setDisabled] = useState(true);
	const submitForm = () => {
		const newOrder = {
			name: formValues.name.trim(),
			size: formValues.size,
			gluten: formValues.gluten,
			special: formValues.special,
			toppings: Object.keys(formValues.toppings).filter(
				(tp) => formValues.toppings[tp]
			),
		};

		axios
			.post('https://reqres.in/api/users', newOrder)
			.then((res) => {
				const ordersFromApi = res.data;
				console.log(ordersFromApi);
				setOrders([ordersFromApi, ...orders]);
				setFormValues(initialFormValues);
			})
			.catch((err) => {
				console.log('There be an error');
			});
	};

	const inputChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const inputChangeName = (name, value) => {
		yup
			.reach(formSchema, name)

			.validate(value)

			.then((valid) => {
				setFormErrors({
					...formErrors,
					[name]: '',
				});
			})

			.catch((err) => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});

		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const checkboxChange = (name, isChecked) => {
		setFormValues({
			...formValues,
			toppings: {
				...formValues.toppings,
				[name]: isChecked,
			},
		});
	};

	useEffect(() => {
		formSchema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);
	return (
		<>
			<div>
				<Switch>
				

					<Route path="/pizza">
						<Pizza
							validinputChange={inputChangeName}
							inputChange={inputChange}
							checkbox={checkboxChange}
							values={formValues}
							submit={submitForm}
							errors={formErrors}
							disabled={disabled}
						/>
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</>
	);
};
export default App;