import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const carro = []


export const CartProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([])

    return(
        <CartContext.Provider value={[carrito, setCarrito]}>
            {children}
        </CartContext.Provider>
    )

}
