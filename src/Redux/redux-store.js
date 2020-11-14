import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import productReducer from './product-reducer'
import storeReducer from "./store-reducer";


let reducers = combineReducers({
    product: productReducer,
    shop: storeReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;