import * as api from '../api/index';
import {login , set_login_error ,logout} from './user.actions';
  
export const LOG_IN = (loginDetails) => async(dispatch) => {
        try{
            console.log("logging in "+loginDetails.email+" , "+loginDetails.password);
            const response = await api.loginIn(loginDetails);
            dispatch(login(response.data));
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.user);
            dispatch(set_login_error(null));
        }
        catch(err){
            dispatch(set_login_error(err.response.data.msg));
        }
    };

export const LOG_OUT = () => async(dispatch) => {
       console.log("logging out");
       dispatch(logout());
       localStorage.setItem("token", "");
       localStorage.setItem("user", "");
};