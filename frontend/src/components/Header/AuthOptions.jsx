import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { selectUserDetails  } from "../../redux/user/user.selector";
import {LOG_OUT} from '../../redux/user/user.utils';

function AuthOptions () {
    const userData =  useSelector(selectUserDetails);
    const history = useHistory();
    const dispatch = useDispatch();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        dispatch(LOG_OUT());
        console.log("logged out");
        history.push("/login");
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
                <button className="btn btn-primary mr-2" onClick={logout}>Logout</button>
            ) : (
                <>
                <button className="btn btn-primary mr-2" onClick={register}>Sign Up</button>
                <button className="btn btn-primary mr-2" onClick={login}>Login</button>
                </>
            )}
        </nav>
    )
}

export default AuthOptions;