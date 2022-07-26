import axios from "axios";
import { LOGIN_API, SIGN_UP_API } from "../Apis/apis";

const LoginAxios = (values) => {
  return axios.post(LOGIN_API, values);
};

const SignUpAxios = (values) => {
  return axios.post(SIGN_UP_API, values);
};

export { LoginAxios, SignUpAxios };