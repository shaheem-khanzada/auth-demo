export const types = { 
    login: 'login',
    initilize: 'initilize',
    logout: 'logout'
}

export const initialState = {
    user: {},
    loading: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case types.initilize:
            return {
                ...state,
                user: action.user,
                loading: false
            };
        case types.login:
            return {
                ...state,
                user: action.user
            };
        case types.logout:
            return {
                ...state,
                user: {}
            };
        default:
            throw new Error();
    }
};

export default reducer;