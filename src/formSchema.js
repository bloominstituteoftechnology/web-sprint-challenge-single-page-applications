import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required to complete order.')
        .min(2, 'Name must be longer than 2 characters'),
    size: yup.string()
        .required('Size is required to complete order'),
    pepperoni: yup.boolean(),
    jalapeno: yup.boolean(),
    ham: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.string()
})

export default formSchema