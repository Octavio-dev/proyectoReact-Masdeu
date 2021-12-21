import React, {useContext} from "react";

//CONTEXT
import {ItemContext} from "../../ItemContext"

//componentes
import Item from "../Item/Item"

const ItemList = () => {

    const [productos] = useContext(ItemContext)

    return(
        <>
            {productos.map((producto) =><Item  producto={producto} key={producto.id}/> )}

        </>
    )
}

export default ItemList