import * as yup from 'yup';
const schema = yup.object().shape({
    name: yup.string().min(6, 'use more than six characters'),
    Email: yup.string().required('Provide Email'),
    extraCheese: yup.boolean(),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    ham: yup.boolean(),
  });
  
  export default schema