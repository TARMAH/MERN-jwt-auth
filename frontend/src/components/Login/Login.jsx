import React, { useState,useEffect } from 'react';
import { selectUserDetails , selectLoginErrorDetails } from "../../redux/user/user.selector";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {LOG_IN} from '../../redux/user/user.utils';


const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submit = async (e) => {
        e.preventDefault();
        const loginUser = {email, password};
        dispatch(LOG_IN(loginUser));
    };

    const userData =  useSelector(selectUserDetails);
    const error = useSelector(selectLoginErrorDetails);
    const history = useHistory();

    useEffect(() => {
        if(userData.user)
            history.push("/");

    }, [userData]);

    return (
        <div>
            <h2>Login</h2>
            <p>{error}</p>
            <form onSubmit={submit}>
                <label>Email: </label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value)}/>
                <label>Password: </label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
        </div>  
    );
};

export default Login;