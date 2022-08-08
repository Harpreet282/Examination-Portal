import * as reduxConstants from "../redux-constants";

export const loginAccount = (token, userType) => ({
  type: reduxConstants.LOGIN,
  payload: {
    token,
    userType,
  },
});

export const logoutAccount = () => ({
  type: reduxConstants.LOGOUT,
});

export const loaderValueFalse = () => ({
  type: reduxConstants.LOADING_FALSE,
});

export const loaderValueTrue = () => ({
  type: reduxConstants.LOADING_TRUE,
});
