import * as reduxConstants from '../redux-constants'
export const loginAccount = (token, userType) => {
  return {
    type: reduxConstants.LOGIN,
    payload: {
      token,
      userType,
    },
  };
};

export const logoutAccount = () => {
  return {
    type: reduxConstants.LOGOUT,
  };
};

export const loaderValueFalse = () => {
  return {
    type: reduxConstants.LOADING_FALSE,
  };
};

export const loaderValueTrue = () => {
  return {
    type: reduxConstants.LOADING_TRUE,
  };
};
