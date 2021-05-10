import * as api from '../api/index';
import {login , set_login_error ,logout , set_register_error} from './user.actions';
  
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

export const REGISTER = (signUpDetails) => async(dispatch) => {
    try{
        console.log("Registering User");
        await api.signUp(signUpDetails);
        dispatch(set_register_error("User Registered! Please Login with your credentials!"))
    }
    catch(err){
        dispatch(set_register_error(err.response.data.msg))
    }
};

export const CHECK_LOGGED_IN = () => async(dispatch) => {
    try{
        console.log("Checking if User already present!");
        const token = localStorage.getItem("token");
        if (token){
            const valid = await api.isValid(token);
            if (valid.data){
                console.log("WE HERE!");
                const user = await api.getUser(token);
                dispatch(login({token,user:user.data}));
                console.log("DONE!");
            }
        }
    }
    catch(err){
        console.log(err);
    }
};
