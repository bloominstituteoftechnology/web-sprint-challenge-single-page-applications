// adding yup and forming the structure for the schema
// calling each field

import * as yup from 'yup';

export default yup.object().shape({
	name: yup
		.string()
		.min(2, 'Name must be at least 2 characters')
		.required('Name is required'),
	size: yup
		.string()
		.oneOf(['small', 'medium', 'large'], 'Pizza size is required'),
	sauce: yup
		.string()
		.oneOf(
            ['originalRed', 'garlicRanch', 'bbqSauce'],'Sauce choice is required'),
			pepperoni: yup.boolean(), 
			sausage: yup.boolean(),
			Bacon: yup.boolean(),
			spicyItalianSausage: yup.boolean(),
			onions: yup.boolean(),
			greenPepper: yup.boolean(),
			blackOlives: yup.boolean(),
			roastedGarlic: yup.boolean(),
			extraCheese: yup.boolean(),

})