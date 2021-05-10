import * as api from '../api/index';
import {login , set_login_error} from './user.actions';
  
export const LOG_IN = (loginDetails) => async(dispatch) => {
        try{
            console.log("logging in "+loginDetails.email+" , "+loginDetails.password);
            const response = await api.loginIn(loginDetails);
            dispatch(login(response.data));
            dispatch(set_login_error(null));
        }
        catch(err){
            dispatch(set_login_error(err.response.data.msg));
        }
    };
