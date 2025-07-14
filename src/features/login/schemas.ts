import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 number",
    ),
});
