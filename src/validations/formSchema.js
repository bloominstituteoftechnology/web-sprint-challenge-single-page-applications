import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2,'Name must be 2 at least characters long')
        .required('username is required'),
})


export default formSchema;