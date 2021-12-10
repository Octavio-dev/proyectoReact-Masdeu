import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const carro = []


export const CartProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([])
    
    useEffect(() => {
        fetch("productos.json")
        .then((response) => response.json())
        .then((data) => setCarrito(data.guitarras));

    }, [])

    return(
        <CartContext.Provider value={[carrito, setCarrito]}>
            {children}
        </CartContext.Provider>
    )

}
