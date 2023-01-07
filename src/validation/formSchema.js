import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required()
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required(),
    sauce: yup
        .string()
        .required(),
    garlic: yup.boolean(),
    green_pepper: yup.boolean(),
    olives: yup.boolean(),
    onions: yup.bool(),
    pineapple: yup.boolean(),
    special: yup.string(),
})

export default formSchema;