// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
    size: yup
        .string()
        .oneOf(["small", "medium", "large", "extraLarge"], "Size is required"),
    sauces: yup.string().oneOf(["marinara", "alfredo", "pesto", "buffalo"], "Sauce choice is required"),
    pepperoni: yup.boolean(),
    italianSausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    chicken: yup.boolean(),
    hamburger: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    pineapple: yup.boolean(),
    blackOlives: yup.boolean(),
    jalepenoPeppers: yup.boolean(),
    onions: yup.boolean(),
    greenPeppers: yup.boolean(),
    mushrooms: yup.boolean(),
    specialInstructions: yup.string()
    .optional("Please let us know anything else about your delivery"),
});
