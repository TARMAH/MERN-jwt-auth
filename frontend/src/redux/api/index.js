import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

export const loginIn = (loginUser) => API.post('/user/login', loginUser);
export const signUp = (loginUser) => API.post('/user/register', loginUser);
export const isValid = (token) => API.post('/user/tokenIsValid', null, {headers: {"x-auth-token": token}});
export const getUser = (token) => API.get("/user/", {headers: { "x-auth-token": token }});

