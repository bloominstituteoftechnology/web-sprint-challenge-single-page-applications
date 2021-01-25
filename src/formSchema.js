import * as yup from 'yup';

const schema = yup.object().shape({

    personName: yup
      .string()
      .trim()
      .required('Name is required')
      .min(2, 'Username must be 2 characters long'), 

    pizzaSize: yup
      .string()
      .oneOf(['small', 'medium', 'large'], 'Please select pizza size.'),

    sauce: yup 
      .string(),
      // .oneOf(['originalRed', "bbqRanch", "spinachAlfredo", "garlicRanch"])
      // .required('Please select a pizza sauce.'), // debug
    
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
    dicedTomato: yup
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
      // { Need to reconfigure topping options to limit to ten }

    glutenFree: yup
      .boolean(),

    specialInstructions: yup
      .string()
      .trim()
      .max(100, 'Message is too long.  Please call us so we can take your special order.'),

});

export default schema;
