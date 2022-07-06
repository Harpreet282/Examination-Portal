const initialState = {
  loading: true,
};

const loadingState = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };
    case "LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default loadingState;
