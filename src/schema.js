import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
    .required('Name is required')
    .min(2, 'Name needs to be at least 2 characters long'),

    size: yup.string()
    .oneOf(['1', '2', '3', '4', '5', '6', '7'])
    .required('This section is required'),

    pepperoni: yup.boolean(),
    onion: yup.boolean(),
    peppers: yup.boolean(),
    sausage: yup.boolean(),
    extraCheese: yup.boolean(),
    olive: yup.boolean(),
    jalapeno: yup.boolean(),

    instruct: form.instruct.trim()
})