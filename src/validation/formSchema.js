import * as Yup from 'yup'


const formSchema = Yup.object().shape({

    name: Yup
      .string()
      .min(2, "Name must be at least 2 characters long.")
      .required("Name is Required"),
      size: Yup
      .string()
      .oneOf(['Small', 'Medium', 'Large'], "Please select a size"),    

    specail: Yup
      .string(),

    sauce: Yup
      .string()
      .oneOf(["originalRed", "garlicRanch", "BBQ"], "Please select a sauce"),

      

  })
  
  export default formSchema