import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name is required")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required("size choice is required"),
    sauce: yup
        .string()
        .required("sauce choice is required"),
    garlic: yup.boolean(),
    green_pepper: yup.boolean(),
    olives: yup.boolean(),
    onions: yup.boolean(),
    pineapple: yup.boolean(),
    special: yup
        .string()
        .max(250, "max characters: 250"),
})

export default formSchema;