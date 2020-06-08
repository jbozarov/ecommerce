
const initialState = []



const ADD_TO_CART = 'ADD_TO_CART'
export function addToCart(item) {
   return {
      type: ADD_TO_CART, 
      payload: item 
   }
}

const EMPTY_CART = 'EMPTY_CART';
export function emptyCart () {
   console.log('Empty cart fired ')
   return {
      type: EMPTY_CART, 
      payload: []
   }
}
export const cartReducer = (state = initialState, action ) => {
   const { type, payload } = action
   console.log(payload)
   switch(type) {
      case ADD_TO_CART : {
         if (state.length<1) {
            return [...state, payload]
         }
         else  {

            let checkedCart = []; 
            var toggle = true; 
            console.log('state ', state)

            checkedCart = state.map(product => {
               if (product.id === payload.id && product.images === payload.images && product.size === payload.size ){
                  toggle = false
                  product.quantity += 1; 
                  product.totalPrice = product.price * product.quantity; 
                  return product
               } 
               return product; 
            })

            if (toggle) {
               checkedCart.push({
                  id: payload.id,
                  name: payload.name,
                  availibility: payload.availibility,
                  images: payload.images,
                  price: payload.price, 
                  quantity: payload.quantity, 
                  serial: payload.serial, 
                  size: payload.size, 
                  totalPrice: payload.totalPrice
               })
            }
         
            return [...checkedCart]
         }
         
      }
      case EMPTY_CART : return payload
      default: return state
   }
}

export default cartReducer