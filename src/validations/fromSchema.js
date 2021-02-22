import * as Yup from 'yup';

const fromSchema = Yup.object().shape({
    name: Yup
        .string()
        .trim()
        .required()
        .min(2, "Name must be at least 2 characters"),
    size: Yup
        .string()
        .oneOf(["Small", "Medium", "Large", "XL"], "Size is required"),
    pepperoni: Yup.boolean(),
    hawaiian: Yup.boolean(),
    bbq: Yup.boolean(),
    margherita: Yup.boolean(),
    note: Yup.string()    
})

export default fromSchema;