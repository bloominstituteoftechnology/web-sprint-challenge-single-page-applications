import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please enter your name to place your order')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required('Please select a size to place your order'),
    sauce: yup
        .string()
        .required('Please select a sauce to place your order'),
    sausage: yup
        .boolean(),
    pepperoni: yup
        .boolean(),
    canadianbacon: yup
        .boolean(),
    spicysausage: yup
        .boolean(),
    specialInstructions: yup
        .string()
})

export default formSchema;