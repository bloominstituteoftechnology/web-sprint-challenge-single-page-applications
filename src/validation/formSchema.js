import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required()
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required(),
    sauce: yup
        .string()
        .required(),
    garlic: yup.bool(),
    green_pepper: yup.bool(),
    olives: yup.bool(),
    onions: yup.bool(),
    pineapple: yup.bool(),
    special: yup.string(),
})

export default formSchema;