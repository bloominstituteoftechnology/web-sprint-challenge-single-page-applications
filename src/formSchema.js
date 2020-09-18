import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be 2 chars or longer"),

  size: yup
    .string()
    .oneOf(["small", "medium", "large"], "You must choose a Size"),

  checkCheese: yup.boolean(),
  checkMeat: yup.boolean(),
  checkVeg: yup.boolean(),
  checkFungus: yup.boolean(),

  instr: yup.string(),
});
