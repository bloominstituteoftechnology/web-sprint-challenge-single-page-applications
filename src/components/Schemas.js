import * as Yup from 'yup'

export const pizzaSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3)
        .max(15)
        .required('Need a name for the order'),
    size: Yup
        .string(),
    peppers: Yup
        .string(),
    olives: Yup
        .string(),
    onions: Yup 
        .string(),
    pineapple: Yup
        .string(),
    special: Yup
        .string()
})