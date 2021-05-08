import ActionTypes from "./user.types";

export const login = (details) => ({
  type: ActionTypes.LOGIN,
  payload: details,
});
