import axios from 'axios';
import { server } from '../../mainServer'
import {toast} from "react-toastify";

export const signup = (name, email, phone, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_REGISTER_REQUEST' });

        const { data } = await axios.post(`${server}/register`, { name, email, phone, password });

        dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data });

        localStorage.setItem('userInfo', JSON.stringify(data));
        localStorage.setItem('isLoggedIn', 'true'); // Add this line

        console.log('data')
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });

        console.log('error')
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_LOGIN_REQUEST' });

        const { data } = await axios.post(`${server}/login`, { email, password });

        if (data.user.status === 'suspended') {
            // Log out the user immediately
            localStorage.removeItem('userInfo'); // Remove user info from local storage
            dispatch({ type: 'USER_LOGOUT' }); // Dispatch a logout action if needed
            return toast.error('You have been suspended. Please contact us.'); // Show toast error message
        }

        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });

        localStorage.setItem('userInfo', JSON.stringify(data));
        localStorage.setItem('isLoggedIn', 'true');
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};