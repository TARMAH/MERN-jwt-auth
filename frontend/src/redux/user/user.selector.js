import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectUserDetails = createSelector([selectUser], (user) => user.userDetails);
export const selectLoginErrorDetails = createSelector([selectUser], (user) => user.loginError);
