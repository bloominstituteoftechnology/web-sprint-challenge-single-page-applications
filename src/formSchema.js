import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required("Name is required")
    .min(2, "username must be at least 2 chars long"),    
    size: yup
      .string()
      .oneOf(["personal", "medium", "large",], "Size is required"),
    sauce: yup
    .string()
    .oneOf(["marinara", "ranch", "bbq"], "Please choose a sauce"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    bacon: yup.boolean(),
    pineapple: yup.boolean(),
    tomatoes: yup.boolean(),
    onions: yup.boolean(),
    mushrooms: yup.boolean(),
    jalepenos: yup.boolean(),
    bananaPeppers: yup.boolean(),
    specialInstructions: yup
    .string(),
})