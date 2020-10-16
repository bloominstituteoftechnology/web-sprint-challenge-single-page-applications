import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
    .required('Name is required')
    .min(2, 'Name needs to be at least 2 characters long.'),

    size: yup.string()
    .oneOf(['1', '2', '3'])
    .required('This section is required'),

    peperoni: yup.boolean(),
    tomatoes: yup.boolean(),
    xtraCheese: yup.boolean(),
    artichoke: yup.boolean(),

    instruct: yup.string()
});