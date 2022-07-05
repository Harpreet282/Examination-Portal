export const loginAccount = (token, userType) => {
  return {
    type: "LOGIN",
    payload: {
      token,
      userType,
    },
  };
};

export const logoutAccount = () => {
  return {
    type: "LOGOUT",
  };
};

export const loaderValue = () => {
  return {
    type: "LOADING_FALSE",
  };
};

export const loaderValue2 = () => {
  return {
    type: "LOADING_TRUE",
  };
};
