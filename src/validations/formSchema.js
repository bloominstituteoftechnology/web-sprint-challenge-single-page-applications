import * as yup from 'yup'
import { boolean } from 'yup/lib/locale'

export default yup.object().shape({
    username: yup
        .string()
        .required("Username is requires")
        .min(2, "name must be at least 2 characters"),

})