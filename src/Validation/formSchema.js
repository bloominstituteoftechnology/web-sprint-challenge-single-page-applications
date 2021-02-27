import * as yup from 'yup'



const formSchema = yup.object().shape({
    size: yup.string()
        .oneOf(['small', 'medium', 'large'], 'Please choose a size!'),
    sauce: yup.string()
        .oneOf(['tomato', 'white', 'green'], 'please choose a sauce'),
    instructions: yup.string()
        .trim(),
    customerName: yup.string()
        .trim()
        .required('Name Please')
        .min(2, 'Name must be at least two characters long'),
    peperoni: yup.boolean(),
    mushroom: yup.boolean(),
    olives: yup.boolean(),
    sausage: yup.boolean(),
    artichokes: yup.boolean(),
})

export default formSchema