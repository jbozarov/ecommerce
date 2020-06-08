import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import cartReducer from './reducers/cartReducer'


export default createStore(cartReducer); 