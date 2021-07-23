import * as yup from 'yup'
import { boolean } from 'yup/lib/locale'

export default yup.object().shape({
    username: yup
        .string()
        .required("Username is requires")
        .min(2, 'name must be at least 2 characters'),
    // email: yup
    //     .string()
    //     .email('Must be a valid email')
    //     .required('Email is required'),
    // password: yup
    //     .string()
    //     .min(8).max(16)
    //     .required('Must provide password'),
    // terms: yup
    //     .boolean()
    //     .oneOf([true], 'must agree to terms' )
    //     // .required('Must agree to terms')

})