import * as yup from 'yup'

const Schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  size: yup
    .string()
    .notOneOf(['Select a Size'])
    .required('Size is required')
})
export default Schema