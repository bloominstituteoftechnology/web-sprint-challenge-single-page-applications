import * as yup from 'yup';

export default yup.object() .shape({
    size: yup
    .string()
    .ensure()
    .required('Pizza size is required!'),
    specialInstructions: yup
    .string(),
    name: yup
    .string()
    .required('Name of order is Required'),
    pepperoni:yup.boolean(),
    jalapeno:yup.boolean(),
    bacon:yup.boolean(),
    greenPepper:yup.boolean(),
    italianSausage:yup.boolean(),
})