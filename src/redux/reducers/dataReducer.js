import data from '../../assets/data'
import { SEARCH_DATA } from './actionTypes'


const initialState = data




const dataReducer = (state = initialState, action ) => {
   const { type, payload } = action
   switch(type) {
      case SEARCH_DATA : {
         //so some logic  
      }
      default : return state; 
   }
}

export default dataReducer; 
