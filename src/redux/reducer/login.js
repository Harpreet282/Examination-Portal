import * as reduxConstants from "../redux-constants";

const initialState = {
  authenticated: false,
  userType: "",
};

const loginState = (state = initialState, action) => {
  switch (action.type) {
    case reduxConstants.LOGIN:
      const { token } = action.payload;
      const { userType } = action.payload;
      // console.log(userType)

      const data = {
        token,
        userType,
      };
      localStorage.setItem("data", JSON.stringify(data));
      // return state=token
      return {
        ...state,
        authenticated: true,
      };

    case reduxConstants.LOGOUT:
      localStorage.removeItem("data");
      return (state = false);
    default:
      return state;
  }
};

export default loginState;
