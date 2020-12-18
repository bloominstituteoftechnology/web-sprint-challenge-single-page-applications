import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "username must be 2 character"),
  pizzaSize: yup
    .string()
    .oneOf(["small", "medium", "large"], "size is required"),
  cheese: yup.boolean(),
  chicken: yup.boolean(),
  peperoni: yup.boolean(),
  text: yup.string()
});