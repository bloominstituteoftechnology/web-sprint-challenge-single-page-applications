import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 characters long"),

  size: yup.string().oneOf(["9'", "16'"], "Pie Size is required"),

  chicken: yup.boolean(),
  mushroom: yup.boolean(),
  bacon: yup.boolean(),
  sausage: yup.boolean(),

  specInstruct: yup.string(),
});
