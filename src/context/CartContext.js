import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();
const initState = {
  products: products,
  total: 0,
  amount: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  function addQuantity(id){
    dispatch({type:"ADD", payload:id});
  }

  function removeQuantity(id){
    dispatch({type: "REDUCE" , payload:id});
  }

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.products]);

  return (
    <CartContext.Provider value={{ ...state, formatMoney, removeItem , addQuantity , removeQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
