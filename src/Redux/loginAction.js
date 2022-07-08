import {setToken,getToken,removeStorage} from '../Utils/LocalStorage';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';


export const Init = () => {
    return async dispatch => {
        let token = await getToken();
        if (token !== null) {
            dispatch({
              type: USER_LOGIN,
              payload: token,
            })
          }
    }
}

export const Login = (token) => {
    return async dispatch => {
        await setToken(token);
        dispatch({
            type: USER_LOGIN,
            payload: token,
        })
    }
}

export const Logout = () => {
    return async dispatch => {
        await removeStorage();
        dispatch({
            type: USER_LOGOUT
        })
    }
}