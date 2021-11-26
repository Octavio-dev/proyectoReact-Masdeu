import React, {useEffect, useState} from "react";

//componentes

import ItemDetail from "../../ItemDetail/ItemDetail"

//css
 import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect( () => {
        fetch("productos.json")
        .then((response) => response.json())
        .then((json) => setProductos(json))
    })

    return(
        <>
        {productos.map((producto) => <ItemDetail producto={producto}/>)}
        </>
    )
}

export default ItemDetailContainer