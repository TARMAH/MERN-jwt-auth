import ActionTypes from "./user.types";

import { login } from "./user.utils.js";

const INITIAL_STATE = {
  userDetails: {displayName:'',token:''}
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        userDetails: login(action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
