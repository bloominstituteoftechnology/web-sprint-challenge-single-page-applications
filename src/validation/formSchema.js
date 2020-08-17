import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .required("Must include name"),
    size: Yup
      .string(),
    instructions: Yup
      .string(),
})

export default formSchema