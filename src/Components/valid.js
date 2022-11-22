
import * as yup from 'yup'

const Valid = yup.object().shape({
    name: yup
    .string()
    .trim()
    .min(3,'name must be at least 3 characters'),
    size: yup
    .string()
    .oneOf(['sm','md','lg'], 'Role is required'),
    special: yup
    .string()
    .trim(),
    bacon: yup.boolean(),
    peperoni: yup.boolean(),
    sausage: yup.boolean(),
    meatballs: yup.boolean
})

export default Valid;
