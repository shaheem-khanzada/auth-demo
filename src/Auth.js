import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initilizeAction, loginAction, logoutAction } from './actions';
import reducer, { initialState } from './reducer';

const AUTH_KEY = 'user';
export const AuthContext = React.createContext();
export const useAuth = () => React.useContext(AuthContext);

export function withApp(Component) {
    const AppComponent = props => (
        <AuthContext.Consumer>
            {contexts => <Component {...props} {...contexts} />}
        </AuthContext.Consumer>
    );
    return AppComponent;
};

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

