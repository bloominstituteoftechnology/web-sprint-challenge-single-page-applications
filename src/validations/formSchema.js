import * as yup from 'yup'
import { boolean } from 'yup/lib/locale'

export default yup.object().shape({
    username: yup
        .string()
        .required("Username is requires")
        .min(2, "name must be at least 2 characters"),
    special: yup
        .string()
        .max(100, 'Shorten your message to 100 chars'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'x-large'], 'Size is required'),
    ham: yup.boolean(),
    olives: yup.boolean(),
    onions: yup.boolean(),
    cheese: yup.boolean(),
})