import * as yup from 'yup'

const Validation = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'name must be 2 characters')
})

export default Validation