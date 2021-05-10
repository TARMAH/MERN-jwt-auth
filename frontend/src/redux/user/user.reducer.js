import ActionTypes from "./user.types";

const INITIAL_STATE = {
  userDetails: {user:null,token:null},
  loginError : null,
  serverError: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        userDetails: action.payload ,
      };
    case ActionTypes.SET_LOGIN_ERROR:
        return {
          ...state,
          loginError: action.payload ,
      };
    case ActionTypes.LOGOUT:
        return {
          ...state,
          userDetails: {user:null,token:null},
      };
    case ActionTypes.SET_REGISTER_ERROR:
        return {
          ...state,
          serverError: action.payload ,
      };
      
    default:
      return state;
  }
};

export default userReducer;
