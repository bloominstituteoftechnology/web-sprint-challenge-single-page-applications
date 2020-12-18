import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required('Name is required.')
    .min(2, 'Name must be longer than 2 characters'),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'wumbo'], 'Please select size'),
  spinach: yup.boolean(),
  shrooms: yup.boolean(),
  olives: yup.boolean(),
  peppers: yup.boolean(),
  special: yup.string(),
});
