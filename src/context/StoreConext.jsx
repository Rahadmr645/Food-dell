import { createContext, useEffect, useState } from "react";
import { menu_list } from "../assets/assets";
import { food_list } from "../assets/assets";



export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {



    const [cartItems, setCartItems] = useState({});


    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({
                ...prev, [itemId]:prev[itemId] + 1
            }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    
 
    const contextValue = {
        menu_list,
        food_list,
        addToCart,
        removeFromCart,
        cartItems,
        setCartItems,

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;