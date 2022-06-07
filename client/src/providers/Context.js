import React, { createContext, useContext, useReducer }  from "react";
import { getCartItem } from "../utils/cart.utils";
import { cartReducer } from "./Reducer";
import { loggedInReducer } from "./Reducer";
export const ShopContext= createContext();


export const AppProvider=({children})=>{



    const isLoggedIn=  localStorage.getItem('login') ? true:false;
    const [loggedInState, loggedInDispatch]= useReducer(loggedInReducer,{isLoggedIn:isLoggedIn,user_id:-1});

    
    
    /**
     * reducer for cart
     */
    const AllCartItems= loggedInState.isLoggedIn? getCartItem():[];
    // console.log(AllCartItems);
    const [cartState, dispatch]= useReducer(cartReducer, [...AllCartItems]);
    



    const AllContexts={
        cartState, dispatch,
        loggedInState, loggedInDispatch
    };

    return <ShopContext.Provider value={AllContexts} >{children}</ShopContext.Provider>
}


export const CartContext= ()=>{
    return useContext(ShopContext)
}

