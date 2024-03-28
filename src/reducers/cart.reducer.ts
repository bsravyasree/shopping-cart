export const initialState = {
    cartItems: [],
  };
export interface CartItems {
    id: string;
    quantity: number;
    
}
  
  const checkIfItemAlreadyExists = (cartItems, item) => {
    return cartItems.find((cartItem) => cartItem.id === item.id);
  };
  
  const getCartItems = (state, currentItem) => {
    if (checkIfItemAlreadyExists(state.cartItems, currentItem)) {
      return state.cartItems.reduce((prev, cur) => {
        if (cur.id === currentItem.id) {
          cur.quantity = cur.quantity + 1;
        }
        return [...prev, cur];
      }, []);
    } else {
      return [...state.cartItems, currentItem];
    }
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          cartItems: getCartItems(state, action.payload),
        };
      case "REMOVE_ITEM":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  