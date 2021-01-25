import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("please input your name")
    .min(2, "name must be at least two characters long"),

  size: yup
  .string()
  .oneOf(['Small', 'Medium', 'Large', 'X-large', 'Super Bowl', 'must select size']),
 
  sauceChoice: yup
  .string()
 .required('please select one'),


  pepperoni: yup
  .boolean(),

  smokedSausage: yup
  .boolean(),

  prosciutto: yup
  .boolean(),

  chicken: yup
  .boolean(),

  pulledPork: yup
  .boolean(),

  bacon: yup
  .boolean(),

  onions: yup
  .boolean(),
  
  pineapple: yup
  .boolean(),

  jalapenos:  yup
  .boolean(),

  babySpinach: yup
  .boolean(),

  mushrooms: yup
  .boolean(),

  kabochaSquash: yup
  .boolean(),

  specialInstructions: yup
  .string()
  .trim()
  .max(50, "max characters 50")
});



export default schema
