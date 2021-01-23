import * as yup from 'yup';

const schema = yup.object().shape({

pizzaSize: yup
  .string()
  .oneOf(['small', 'medium', 'large'], 'Please select pizza size.'),
sauce: yup 
  .string()
  .required('Please select a pizza sauce.'),
pepperoni: yup
  .boolean(),
  // {Need to reconfigure topping options to limit to ten }
specialInstructions: yup
  .string()
  .trim()
  .min(100, 'Message is too long.  Please call use for your special instructions'),

});

export default schema
