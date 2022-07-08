import { CART_TOTAL } from './cartAction';


const initialState = {
    totalAmount: 0
}

function cartTotalReducer(state = initialState, action) {
    switch (action.type) {
        case CART_TOTAL:
            return {
                ...state,
                totalAmount: action.payload,
            }
        default:
            return state;
    }
}

export default cartTotalReducer;