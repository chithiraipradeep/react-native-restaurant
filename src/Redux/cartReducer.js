import { CART_COUNT } from './cartAction';

const initialState = {
    count: 0
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case CART_COUNT:
            return {
                ...state,
                count: action.payload,
            }
        default:
            return state;
    }
}

export default cartReducer;