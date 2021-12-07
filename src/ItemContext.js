import React, { createContext, useState, useEffect } from "react";

export const ItemContext = createContext()



export const ItemProvider = ({children}) => {
    
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        fetch("productos.json")
        .then((response) => response.json())
        .then((productos) => setProductos(productos.guitarras))
    })

    return(
        <ItemContext.Provider value={[productos, setProductos]}>
            {children}
        </ItemContext.Provider>
    )

}

