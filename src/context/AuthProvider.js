import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initilizeAction, loginAction, logoutAction } from '../actions';
import reducer, { initialState } from '../reducer';
import { AuthContext } from './AuthContext';

const AUTH_KEY = 'user';

const AuthProvider = React.memo(({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    useEffect(() => {
        const initilizeLogin = () => {
            const user = JSON.parse(localStorage.getItem(AUTH_KEY));
            dispatch(initilizeAction(user));
            navigate('/welcome');
        };
        initilizeLogin();
    }, []);

    const login = (user) => {
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
        dispatch(loginAction(user));
        navigate('/welcome');
    };

    const logout = () => {
        localStorage.removeItem(AUTH_KEY);
        dispatch(logoutAction());
        navigate('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                ...state
            }}
        >
            {children}
        </AuthContext.Provider>
    );
});

export default AuthProvider;

