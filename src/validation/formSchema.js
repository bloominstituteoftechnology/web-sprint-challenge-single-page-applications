import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    size: yup
        .string()
        .required('Select a size')
        .oneOf(['Small', 'Medium', 'Large', 'Extra Large'], 'Select a size'),
    pepperoni: yup
        .boolean(),
    onion: yup
        .boolean(),
    greenPepper: yup
        .boolean(),
    tomatoes: yup
        .boolean(),
    glutenFree: yup
        .boolean(),
    instructions: yup
        .string()    
})

export default formSchema