import * as yup from "yup"

const formschema = yup.object().shape({
    name: yup.string().required("name must be at least 2 characters").min(2, "name must be at least 2 characters"),
    size: yup.string().oneOf(["1","2","3","4"], 'you must chose your size'),
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
    specialText: yup.string()
  
   

})

export default formschema