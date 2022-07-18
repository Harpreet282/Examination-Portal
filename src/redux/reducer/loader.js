import * as reduxConstants from '../redux-constants';

const initialState = {
  loading: true,
};

const loadingState = (state = initialState, action) => {
  switch (action.type) {
    case reduxConstants.LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case reduxConstants.LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default loadingState;
