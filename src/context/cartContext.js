import React, { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [carro, setCarro] = useState([])

    return(
        <CartContext.Provider value={[carro, setCarro]}>
            {children}
        </CartContext.Provider>
    )

}
