import * as yup from "yup";

export default yup.object().shape({
    name: yup
      .string()
      .required("name is required")
      .min(2, "name must be 2 character"),
    size: yup
      .string()
      .oneOf(["small", "medium", "large"], "role is required"),
    pepperoni: yup.boolean(),
    spinach: yup.boolean(),
    feta: yup.boolean(),
    mushrooms: yup.boolean(),
    instructions: yup
        .string()
        .required("Tell us something")
        .min(3, "instructions must be at least 3 characters")
  });