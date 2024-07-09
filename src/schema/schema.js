import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required").min(2, " First Name must be at least 2 characters").matches(
          /^[a-zA-Zа-яА-Я0-9\s]*$/,
          " First Name can only contain letters, numbers, and spaces"
      ),
  lastName: yup.string().required("Last Name is required").min(2, "Name must be at least 2 characters")

    .matches(
        /^[a-zA-Zа-яА-Я0-9\s]*$/,
        "Last Name can only contain letters, numbers, and spaces"
    ),
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State / Province is required"),
  zipCode: yup
      .string().required('Postal / Zip Code is required'),
  phone: yup
      .string()
      .required("Phone is required")
      .nullable(true)
      .matches(/^(?:\+\d{12}|(?:\(\d{3}\)|\d{3})\d{7})$/, {
        message: "Invalid phone number format"
      }),
email: yup.string().email("Wrong Email").required("Email is required").matches(
    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    "Invalid email format"),
});
