import * as yup from "yup";
const formSchema = yup.object().shape({
    name: yup.string().min(2,"name must be at least 2 characters"),
    size: yup.string().oneOf(['s', 'm', 'l'], "please select a size :)") ,
    special: yup.string(),
    pepperoni: yup.string(),
    chicken: yup.string(),
    peppers: yup.string(),
    Ham: yup.string(),
  })

export default formSchema