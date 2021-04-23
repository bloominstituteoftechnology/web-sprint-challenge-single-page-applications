import * as yup from "yup";
export default yup.object().shape({
    name: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be 3 chars long"),
    email: yup
      .string()
      .email("must be a valid email")
      .required("email is required"),
    phone: yup
    .string()
    .max(10, 'cannot exceed 10 numbers')
    .required('must enter valid phone number'),
  textarea: yup
    .string(),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'xl']),
    sauce: yup
      .string()
    .required('must choose one'),

    pepperoni: yup
    .boolean(),
    // .oneOf([true]),
    pineapple: yup
    .boolean(),
    // .oneOf([true]),
    onions: yup
    .boolean(),
    // .oneOf([true]),
    blackOlives: yup
    .boolean(),
    // .oneOf([true]),
    greenPeppers: yup
    .boolean(),
    // .oneOf([true]),
    extraCheese: yup
    .boolean(),
    // .oneOf([true]),
    mushrooms: yup
    .boolean(),
    // .oneOf([true]),
    jalepenos: yup
    .boolean(),
    // .oneOf([true]),
  }); 