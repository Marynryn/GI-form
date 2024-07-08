import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  street: yup.string(),
  city: yup.string(),
  state: yup.string(),
  zipCode: yup.string(),
  phone: yup
    .string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Wrong Phone")
    .required("Phone is required"),
  email: yup.string().email("Wrong Email").required("Email is required"),
});
