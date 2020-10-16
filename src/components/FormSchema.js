import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("Full Name Required")
        .min(2, "Name must be at least two characters"),
    size: yup
        .string()
        .oneOf(["Small", "Medium", "Large"], "Size selection required"),
    pepperoni: yup.boolean(),
    chicken: yup.boolean(),
    sausage: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.string(),
})