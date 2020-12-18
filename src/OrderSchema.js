import * as yup from "yup"


export default  yup.object().shape({

    name: yup.string().required('name is required').min(2, " length"),
    email: yup.string().email(' must be and email').required('email required'),
});