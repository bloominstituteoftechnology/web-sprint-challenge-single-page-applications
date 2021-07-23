import * as yup from 'yup'
import {toppings} from '../constants'

//declare the schema use for the validation without the checkboxes

const shape = {
    name: yup
        .string()
        .trim()
        .min(2,'name must be at least 2 characters')
        .required('username is required'),
    size:  yup
    .string()
    .required('size is required'),
    special:  yup
        .string(),
}

//add dycnamic checkbox to formSchema
toppings.forEach(element => {
    shape[element.replace(/\s/g, '').toLowerCase()]= yup.boolean()
})

const formSchema = yup.object().shape(shape)


export default formSchema;