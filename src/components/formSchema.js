import * as  yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, "Name must be at leasr 3 Characters")
    .required("Name is required"),
});

export default formSchema;