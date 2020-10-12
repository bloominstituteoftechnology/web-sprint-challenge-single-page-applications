import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is Required"),

  size: yup
    .string()
    .oneOf(["small", "medium", "large"], "You must choose your pizza size"),


    pepperoni: yup
    .boolean()
    .oneOf([true, false], ""),

    hawaiian: yup
    .boolean()
    .oneOf([true, false], ""),

    bbq: yup
    .boolean()
    .oneOf([true, false], ""),

    chicken: yup
    .boolean()
    .oneOf([true, false], ""),


});

export default formSchema;
