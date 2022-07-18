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

export const examCreate = (data) => {
  return {
    type: "CREATE_EXAM",
    payload:data,
  };
};
export const question_detail = (data) => {
  console.log('QUESTION',data)
  return {
    type: "QUESTION_DETAILS",
    data:data,
  };
};
