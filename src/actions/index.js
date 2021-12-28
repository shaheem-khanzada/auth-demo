import { types } from '../reducer';

const initilizeAction = (user) => {
    return {
        type: types.initilize,
        user
    };
};

const loginAction = (user) => {
    return {
        type: types.login,
        user
    };
};

const logoutAction = () => {
    return {
        type: types.logout
    };
};

export { initilizeAction, loginAction, logoutAction };