import * as reduxConstants from '../redux-constants';

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
}

export const loaderValueFalse = () => ({
  type: reduxConstants.LOADING_FALSE,
});

export const loaderValueTrue = () => ({
  type: reduxConstants.LOADING_TRUE,
});
