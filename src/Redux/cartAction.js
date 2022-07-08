import { getCartCount, getTotalPrice } from '../Utils/LocalStorage';

export const CART_COUNT = 'CART_COUNT';
export const CART_TOTAL = 'CART_TOTAL';


export const cartCount = (count) => {
    return async dispatch => {
        dispatch({
            type: CART_COUNT,
            payload: count,
        })
    }
}

export const getCount = () => {
    return async dispatch => {
        let count = await getCartCount();
        dispatch({
            type: CART_COUNT,
            payload: count,
        })
    }
}

export const getTotal = () => {
    return async dispatch => {
        let totalAmount = await getTotalPrice();
        dispatch({
            type: CART_TOTAL,
            payload: totalAmount,
        })
    }
}


