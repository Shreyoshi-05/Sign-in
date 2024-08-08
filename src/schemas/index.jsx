import * as Yup from "yup";

export const signUpScheme = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your name"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Please enter valid password"),
});
