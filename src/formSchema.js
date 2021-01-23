import * as yup from 'yup';

const schema = yup.object().shape({


name: yup
  .string()
  .trim()
  .required('Name is required')
  .min(2, 'Username must be 2 characters long'), 
pizzaSize: yup
  .string()
  .oneOf(['small', 'medium', 'large'], 'Please select pizza size.'),
sauce: yup 
  .string()
  .required('Please select a pizza sauce.'),


pepperoni: yup
  .boolean(),
sausage: yup
  .boolean(),
canadianBacon: yup
  .boolean(),
spicyItalianSausage: yup
  .boolean(),
grilledChicken: yup
  .boolean(),
onions: yup
  .boolean(),
greenPepper: yup
  .boolean(),
dicedTomatos: yup
  .boolean(),
blackOlives: yup
  .boolean(),
roastedGarlic: yup
  .boolean(),
artichokeHearts: yup
  .boolean(),
threeCheese: yup
  .boolean(),
pineapple: yup
  .boolean(),
extraCheese: yup
  .boolean(),
  // {Need to reconfigure topping options to limit to ten }
  
specialInstructions: yup
  .string()
  .trim()
  .max(100, 'Message is too long.  Please call use for your special instructions'),

});

export default schema
