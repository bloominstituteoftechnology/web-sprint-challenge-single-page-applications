
import * as yup from "yup";

export default yup.object().shape({
  pizzasize: yup
    .string()
    .required("Choice of size is required"),
  sauce: yup
    .string()
    .required("sauce is required"),
    special: yup
    .string()
});
