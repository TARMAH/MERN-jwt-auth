import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {  selectServerErrorDetails } from "../../redux/user/user.selector";
import {REGISTER} from '../../redux/user/user.utils';

function Register () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();

    const dispatch = useDispatch();
    const error = useSelector(selectServerErrorDetails);

    const submit = async (e) => {
        e.preventDefault();
        let newUser = {email,password,passwordCheck,displayName};
        dispatch(REGISTER(newUser));
        
    };
   
    return ( 
        <div className="register">
            <h2>Register</h2>
            {error }
            <form onSubmit={submit}>
                <label>Email: </label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value)}/>
                <label>Password: </label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm password" onChange={e => setPasswordCheck(e.target.value)}/>
                <label>Display name </label>
                <input type="text" id="dsplay-name" onChange={e => setDisplayName(e.target.value)}/>
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
        </div>
        );
}
 
export default Register;