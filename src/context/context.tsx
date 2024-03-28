import { createContext, useReducer, useContext, ReactNode } from 'react';
import cartReducer, { initialState } from '../reducers/cart.reducer';
import productReducer from '../reducers/product.reducer';

type ShoppingCartProviderProps = {
    children: ReactNode
}

const CartContext = createContext({});

const Context = ({ children }: ShoppingCartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
  
    const addItem = (item) => {
      dispatch({ type: "ADD_ITEM", payload: item });
    };
  
    const removeItem = (item) => {
      dispatch({ type: "REMOVE_ITEM", payload: item });
    };

    const [productState, productDispatch] = useReducer(productReducer, {
      byCategory: [],
      byRating: 0,
    });
  
    return (
      <CartContext.Provider value={{addItem, removeItem, state, productState, productDispatch}}>{children}</CartContext.Provider>
    );
  };

  
  export const CartState = () => {
    return useContext(CartContext);
  };

  export default Context;