import * as yup from 'yup'

const formSchema = yup.object().shape({
    size: yup.string()
        .oneOf(['small', 'medium', 'large'], 'Please choose a size!'),
    sauce: yup.string()
        .oneOf(['tomato', 'white', 'green'], 'please choose a sauce'),
    items: yup.string()
        .trim()
        .min(5, 'please choose five toppings'),
    instructions: yup.string()
        .trim(),
    name: yup.string()
        .trim()
        .required('Name Please')
        .min(2, 'Name must be at least two characters long')
})

export default formSchema