import React, { useState } from 'react';
import './login.css';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginAccount } from '../../redux/actions';
import Loader from '../../Loader';
import Button from '../../components/Button';
import { LoginAxios } from '../../Services';

const customId = 'custom-id';
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format!').required('**Required!'),
    password: Yup.string()
      .min(6, 'Password must be equal to or more than 6 characters!')
      .max(20, 'Too Long!')
      .required('**Required!'),
  });
  const onSubmit = (values) => {
    // console.log('Submit Values',values)
    setLoading(true);
    LoginAxios(values)
      .then((res) => {
        setLoading(false);
        // console.log(res);
        toast.success('Login Successfully!', {
          toastId: customId,
        });
        dispatch(
          loginAccount(res.data.data.accessToken, res.data.data.userType),
        );
        navigate('/dashboard');
      })
      .catch((err) => {
        setLoading(false);
        // console.log(err);
        if (err.response.data.message === 'INVALID_PASSWORD') {
          toast.error('Invalid Password!', {
            toastId: customId,
          });
        } else if (err.response.data.message === 'USER_NOT_FOUND') {
          toast.error('User not found!', {
            toastId: customId,
          });
        } else {
          toast.error('Error!', {
            toastId: customId,
          });
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
    <div className="">

      <section className="login-page margin-from-top">
        {loading ? (
          <Loader />
        ) : (
          <div className="formsSection all-containers absolute-center">
            <h3>Login Here !!</h3>
            <form className="" onSubmit={formik.handleSubmit}>
              <div className="">
                <input
                  type="text"
                  {...formik.getFieldProps('email')}
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
                  {...formik.getFieldProps('password')}
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
                {/* <button type="submit" className="btn">Login</button> */}
                <Button type='submit' text='Login' />
              </div>
              <div className="signupLink">
                <p>
                  Don't have an Account?
                  <NavLink to="/signup"> Sign-Up Here!!</NavLink>
                </p>
              </div>
            </form>
          </div>

        )}
      </section>
    </div>
  );
}

export default Login;
