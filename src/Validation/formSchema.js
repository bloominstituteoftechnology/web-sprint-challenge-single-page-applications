import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2)
    .required(),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large']),
    instructions: yup
    .string()
    .required('Please Enter Any Instructions, If none enter N/A')

})

export default formSchema