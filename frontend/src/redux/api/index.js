import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

export const loginIn = (loginUser) => API.post('/user/login', loginUser);
export const signUp = (loginUser) => API.post('/user/register', loginUser);