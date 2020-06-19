import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(3, "Please enter a name larger than 3 letters")
    .required("Must include a name"),
  specialInstructions: Yup
    .string(),
  toppings: Yup
    .string(),
  size: Yup
    .string(),
})

export default formSchema