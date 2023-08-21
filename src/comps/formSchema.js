import * as yup from "yup"

const formschema = yup.object().shape({
    name: yup.string().required("name must be at least 2 characters").min(2, "name must be at least 2 characters"),
    size: yup.string().oneOf(["1","2","3","4"], 'you must chose your size'),
    topping: yup.boolean
  
   

})

export default formschema