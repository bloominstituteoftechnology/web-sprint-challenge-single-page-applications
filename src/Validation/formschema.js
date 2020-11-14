import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
        .min(3, 'Must be at least 3 chars long')
        .required('Enter name for order'),
    size: yup.string()
        .oneOf(['small', 'medium', 'large', 'x-large', 'Choose a size']),
        pepperoni: yup.boolean(),
        grilledChicken: yup.boolean(),
        greenPepper: yup.boolean(),
        pineapple: yup.boolean()
})