import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup.string()
        .trim()
        .min(2, 'name must be at least 2 characters long')
        .required('name is a required field'),
    size: yup.string().required('select a size'),
    instructions: yup.string()
    
})
export default formSchema