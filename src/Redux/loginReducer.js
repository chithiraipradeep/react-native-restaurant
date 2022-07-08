import { USER_LOGIN, USER_LOGOUT } from './loginAction';

export const initialState = {
    authToken: null,
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                authToken: action.payload,
            }
        case USER_LOGOUT:
            return {
                authToken: null,
            }
        default:
            return state;
    }
}

export default loginReducer;
