import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';

const initialFormValues = {
	name: '',
	size: '',
	sauce: '',
	pepperoni: false,
	sausage: false,
	Bacon: false,
	spicyItalianSausage: false,
	onions: false,
	greenPepper: false,
	blackOlives: false,
	roastedGarlic: false,
	extraCheese: false,
	specialInstructions: '',
};
const initialFormErrors = {
	name: '',
	size: '',
	sauce: '',
};
const initialOrder = [];
const initialDisabled = true;

export default function App() {
	const [orders, setOrders] = useState(initialOrder);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const postNewOrder = (newOrder) => {
		axios
			.post('https://reqres.in/api/users', newOrder)
			.then((res) => {
				setOrders([...orders, res.data]);
				setFormValues(initialFormValues);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const inputChange = (name, value) => {
		yup
			.reach(schema, name)
			.validate(value)
			.then(() => {
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

	const formSubmit = () => {
		const newOrder = {
			name: formValues.name.trim(),
			size: formValues.size,
			sauce: formValues.sauce,
			pepperoni: formValues.pepperoni,
			sausage: formValues.sausage,
			bacon: formValues.canadianBacon,
			spicyItalianSausage: formValues.spicyItalianSausage,
			onions: formValues.onions,
			greenPepper: formValues.greenPepper,
			blackOlives: formValues.blackOlives,
			roastedGarlic: formValues.roastedGarlic,
			extraCheese: formValues.extraCheese,
			specialInstructions: formValues.specialInstructions,
		};
		console.log('New Order', newOrder);
		postNewOrder(newOrder);
	};

	useEffect(() => {
		schema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);

	return (
		<>
			<Header />
			<Switch>
				<Route path={'/order-form'}>
					<OrderForm
						values={formValues}
						change={inputChange}
						submit={formSubmit}
						disabled={disabled}
						errors={formErrors}
					/>
				</Route>
				<Route exact path={'/'}>
					<Home />
				</Route>
			</Switch>
		</>
	);
}