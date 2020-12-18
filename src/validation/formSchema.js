import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("name is required")
        .min(2, "username must be 2 chars long"),
    size: yup
        .string()
        .required("Choose your size!"),
    specialInstructions: yup
        .string(),
    sauce: yup
        .string()
        .oneOf(["original", "ranch", "bbq", "alfredo"], "Sauce is required"),
    gluten: yup.boolean(),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon:yup.boolean(),
    chicken:yup.boolean(),
    olives:yup.boolean(),
    peppers:yup.boolean(),
});

