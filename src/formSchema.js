import * as yup from 'yup'
 
export default yup.object().shape({
    size:yup.string()
       .oneOf(['small','medium','large'], 'Size is required'),
    sauce:yup.string()
       .oneOf(['red', 'garlic', 'bbq', 'alfredo'], 'Sauce is required'),
    instructions:yup.string()
        .required('Instructions required. In none, type N/A'),
    name:yup.string()
       .required('Name is required')
       .min(2, 'Name must be 2 chars or longer'),
   // Done with check boxes
   sausage: yup.boolean(),
   pepperoni: yup.boolean(),
   peppers: yup.boolean(),
   olives: yup.boolean(),
})

