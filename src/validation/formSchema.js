import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "Name needs to be at least 3 characters.")
        .required("Please provide a your Name"),

    size: Yup
        .string()
        .oneOf(['small', 'medium', 'large'], "Please select a size")
        .required("Must choose a size."),

    // sauce: Yup
    //     .mixed()
    //     .oneOf([
    //         'pesto' === true,
    //         'red' === true,
    //         'white' === true,
    //         'garlic' === true,
    //         'spicy' === true,
    //         'bbq' === true,
    //     ])
    //     .required("Please select at least one sauce."),
    // cheese: Yup
    //     .array()
    //     .min([1], "Please select at least one cheese.")
    //     .required("Please select at least one cheese."),
    instructions: Yup
        .string()

})

export default formSchema;