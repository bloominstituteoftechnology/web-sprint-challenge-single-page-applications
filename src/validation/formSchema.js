import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "Name needs to be at least 3 characters.")
        .required("Please provide a your Name"),

    size: Yup
        .string()
        .oneOf(['small', 'medium', 'large'], "Please select a size")
        .required("Must choose a size."),

    instructions: Yup
        .string()

})

export default formSchema;

// Created by Donald Faulknor
// GitHub - https://github.com/social-collab