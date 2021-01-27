import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import cartReducer from './reducers/cartReducer'
import dataReducer from './reducers/dataReducer'

const rootReducer = combineReducers({
   cartReducer, 
   dataReducer
})


export default createStore(rootReducer); 