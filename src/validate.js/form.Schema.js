import * as yup from "yup";

export default yup.object().shape({
  username:  yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 character"),

  size: yup
    .string()
    .oneOf([ "personal-pan", "small", "medium", "large"], "topping is required"),
  peppers: yup.boolean(),
  sausage: yup.boolean(),
  pineapple: yup.boolean(),
});