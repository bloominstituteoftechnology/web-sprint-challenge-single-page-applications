import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name Required"),

  size: yup
    .string()
    .oneOf(["small", "medium", "large"], "choose size"),


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