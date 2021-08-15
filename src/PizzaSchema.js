import * as yup from 'yup'

 export default yup.object().shape({
     name: yup.string().trim().required('Name is required.').min(2, 'Name must be at least 2 characters long'),
     size: yup.string().required('Size is required'),
     cheese: yup.boolean(),
     sauce: yup.boolean(),
     crust: yup.boolean(),
     onion: yup.boolean(),
     special: yup.string()
 })
