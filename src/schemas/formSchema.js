import * as yup from "yup"

export default yup.object().shape({
    name: yup.string().required("name required"),
    size: yup.string().required("size required"),
    gluttenFree: yup.string().required("glutten free option required"),
})