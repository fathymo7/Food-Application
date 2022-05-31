import React from "react";
import CartContext from "./cart-context";

const CartProvider = props => {

    const addItemToCart = item => {}

    const removeItemFromCart = id => {}

    const cartContext = {
        item: [],
        totalAmount: 0,
        addItem: ,
        removeItem: 
    };

    return 
        <CartContext.Provider>
{props.children}
        </CartContext.Provider>
    
}
export default CartProvider;