import React, { useState } from "react";
import "./login.css";
import { useNavigate, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginAccount } from "../../redux/actions";
import { LOGIN_API } from "../../Apis/apis";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../Loader";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format!").required("**Required!"),
    password: Yup.string()
      .min(6, "Password must be equal to or more than 6 characters!")
      .max(50, "Too Long!")
      .required("**Required!"),
  });

  const onSubmit = (values) => {
    // console.log('Submit Values',values)
    setLoading(true);
    axios
      .post(LOGIN_API, values)
      .then((res) => {
        setLoading(false);
        console.log(res);
        toast.success("Login Successfully!");
        dispatch(
          loginAccount(res.data.data.accessToken, res.data.data.userType)
        );
        navigate("/profile");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if (err.response.data.message === "INVALID_PASSWORD") {
          toast.error("Invalid Password!");
        } else if (err.response.data.message === "USER_NOT_FOUND") {
          toast.error("User not found!");
        } else {
          toast.error("Error!");
        }
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // console.log('Visited Feilds', formik.touched)

  return (
    <>
      <section className="login-page">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="container all-containers my-5">
              <div className="row">
                <div className="col-md-6 left-content">
                  <div className="content absolute-center">
                    <h1>Please Login by Enter your Credentials</h1>
                  </div>
                </div>
                <div className="col-md-6 right-content">
                  <div className="content absolute-center">
                    <form className="px-5" onSubmit={formik.handleSubmit}>
                      <div className="">
                        <input
                          type="text"
                          {...formik.getFieldProps("email")}
                          placeholder="E-mail"
                          autoComplete="off"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <p className="text-danger error">
                            {formik.errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div className="">
                        <input
                          type="password"
                          {...formik.getFieldProps("password")}
                          placeholder="Password"
                          autoComplete="new-password"
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <p className="text-danger error">
                            {formik.errors.password}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <button className="btn">Login</button>
                      </div>
                      <div className="signupLink">
                        <p>
                          Don't have an Account?
                          <NavLink to="/signup"> Sign-Up Here</NavLink>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
