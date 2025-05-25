import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  CssBaseline,
  Container,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../State/Authentication/Action";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Họ tên không được bỏ trống"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Email không được bỏ trống"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 8 ký tự")
    .required("Mật khẩu không được bỏ trống"),
  role: Yup.string().required("Chọn vai trò"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    dispatch(registerUser({ userData: values, navigate }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography className="text-center" variant="h5">
          ĐĂNG KÝ
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Họ tên"
              name="fullName"
              id="fullName"
              autoComplete="fullName"
              helperText={<ErrorMessage name="fullName" />}
            />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              name="email"
              id="email"
              autoComplete="email"
              helperText={<ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Mật khẩu"
              name="password"
              type="password"
              id="password"
              helperText={<ErrorMessage name="password" />}
            />
            <Field
              className="mt-3"
              as={Select}
              variant="outlined"
              margin="normal"
              fullWidth
              name="role"
              id="role"
              // autoComplete="role"
              helperText={<ErrorMessage name="role" />}
            >
              <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
              <MenuItem value="ROLE_RESTAURANT_OWNER">
                Restaurant Owner
              </MenuItem>
            </Field>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Đăng ký
            </Button>
          </Form>
        </Formik>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Bạn đã có tài khoản? Hãy{" "}
          <Button onClick={() => navigate("/account/login")}>Đăng nhập</Button>
        </Typography>
      </div>
    </Container>
  );
};

export default RegistrationForm;
