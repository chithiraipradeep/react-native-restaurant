import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import cartReducer from "./cartReducer";
import cartReducerTotal from "./cartTotalReducer";
import loginReducer from "./loginReducer";
const RootReducers = combineReducers({loginReducer,cartReducer,cartReducerTotal });

export const Store = createStore(RootReducers, applyMiddleware(thunk));