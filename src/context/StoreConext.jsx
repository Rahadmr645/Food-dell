import { createContext } from "react";
import { menu_list } from "../assets/assets";
export const StoreContext = createContext(null);

const storeContextProvider = ({ children }) => {

    const contextValue = {
       menu_list,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            { children }
        </StoreContext.Provider>
    )
}

export default storeContextProvider;