import * as yup from "yup";

export default yup.object().shape({
    name: yup.string().required('No numbers or special characters allowed').min(2, 'must be at least 2 characters'),
    size: yup.string(),
    pepperoni: yup.boolean().oneOf([true], 'error'),
    sausage: yup.boolean().oneOf([true], 'error'),
    mushrooms: yup.boolean().oneOf([true], 'error'),
    onions: yup.boolean().oneOf([true], 'error'),
    instructions: yup.string()
});