import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('Name required').min(2, 'Name must be at least two characters long'),
    size: yup.string().oneOf(['small', 'medium', 'large'], 'Select a size'),
    sauce: yup.string().oneOf(['red', 'spicy', 'white'], 'Select a sauce'),

});