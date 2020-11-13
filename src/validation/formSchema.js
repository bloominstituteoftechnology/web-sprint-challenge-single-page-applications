import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().min(2, 'bro please just give me a normal name'),
    pizzaSize: yup.string().oneOf(['small','medium','large'], 'Dude just give me a size'),
    peperoni: yup.boolean(),
    cheese: yup.boolean(),
    mushroom: yup.boolean(),
    bacon: yup.boolean(),
    chocolate: yup.boolean(),
    specialInstructions: yup.string()
})