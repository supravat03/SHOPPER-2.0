import { getCartItem, saveCartItem } from "../utils/cart.utils";

export const cartReducer = (state, action) => {
  // console.log("cart reducer", state);
  switch (action.type) {

    case "add_to_cart":

      if (state.indexOf(action.payload) !== -1) {
        return state;
      }
      saveCartItem([...state, action.payload]);
      state = [...getCartItem()];
      return state;

    case "remove_from_cart":

      let newState = state.filter((item) => item.product_id !== action.payload);
      state = [...newState];
      saveCartItem(state);
      return state;

    case "increment":

      return state.map((item) => {
        if (item.product_id === action.payload) {
          item.qty = item.qty + 1;
        }
        return item;
      });

    case "decrement":
      return state.map((item) => {
        if (item.product_id === action.payload) {
          item.qty = item.qty > 0 ? item.qty - 1 : 0;
        }
        return item;
      });

    default:
      return state;
  }
};


export const loggedInReducer=(state,action)=>{
  switch (action.type) {
    case "loggedIn":
      // state.isLoggedIn= true;
      state= {isLoggedIn:true,user_id:action.payload.user_id};
      return state;
  
    default:
      return state;
  }
}