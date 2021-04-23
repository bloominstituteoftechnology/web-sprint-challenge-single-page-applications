import * as yup from "yup"

export default yup.object().shape({
    name: yup.string().required("Name is required").min(2, "name must be at least 2 characters"),
    size: yup.string().required("Size is required"),
    pineapple: yup.boolean().oneOf([true,false],""),
    jalapenos: yup.boolean().oneOf([true,false],""),
    mushrooms: yup.boolean().oneOf([true,false],""),
    pepperoni: yup.boolean().oneOf([true,false],""),
    instructions: yup.string(),



});