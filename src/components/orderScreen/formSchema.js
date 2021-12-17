import * as yup from 'yup';


const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2, 'name must be at least 2 characters'),
    // size: yup
    //     .string(),
    // Barbecue: yup.boolean(),
    // Buffalo: yup.boolean(),
    // Marinara: yup.boolean(),
    // Alfredo: yup.boolean(),

    // cheese: yup
    //     .string(),
    // Pepperoni: yup.boolean(), 
    // Sausage: yup.boolean(),
    // Anchovies: yup.boolean(),
    // Chicken: yup.boolean(),

    // Mushroom: yup.boolean(),
    // Onion: yup.boolean(),
    // BlackOlives: yup.boolean(),
    // Jalapenos: yup.boolean(),

    // specialText: yup
    //     .string(),


});

export default formSchema;