// Here goes the schema for the form
import * as yup from 'yup';
// Before submitting form we want to verify that user has entered all fields
// Simplest way to use Yup
// 1. Define object schema and its validation
// 2. Create validator object using Yup with expected schema and validation
// 3. Use Yup utility function "validate" to verify if object are valid(satisfies schema and validations)

// Below is a validator object for "schema" object
const formSchema = yup.object().shape({
    customerName: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be 2 characters long'),
    pizzaSize: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Pizza size is required'),
    pineapple: yup.boolean(),
    sausage: yup.boolean(),
    cilantro: yup.boolean(),
    onion: yup.boolean(),
    chicken: yup.boolean(),
    tomato: yup.boolean(),
    olives: yup.boolean()
});
export default formSchema;