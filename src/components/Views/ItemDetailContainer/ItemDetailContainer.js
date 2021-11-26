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
        <div className="ItemDetailContainer">  
            {productos.map((producto) => <ItemDetail producto={producto}/>)}
        </div>
    )
}

export default ItemDetailContainer