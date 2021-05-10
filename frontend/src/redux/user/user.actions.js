import ActionTypes from "./user.types";

export const login = (loginDetails) => ({
  type: ActionTypes.LOGIN,
  payload: loginDetails,
});

export const set_login_error = (error) => ({
    type: ActionTypes.SET_LOGIN_ERROR,
    payload: error,
  });
  
export const logout = () => ({
    type: ActionTypes.LOGOUT
  });

export const set_register_error = (error) => ({
    type: ActionTypes.SET_REGISTER_ERROR,
    payload: error,
  });