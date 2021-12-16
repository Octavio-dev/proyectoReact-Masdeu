import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

//CONTEXT
import {ItemContext} from "../../ItemContext"

//componentes
import Item from "../../components/Item/Item"

const ItemFilter = () => {

    const [productos, setProductos] = useContext(ItemContext)
    const [items, setItems] = useState([])
    let {marca} = useParams()

    useEffect(() => {
        const filtro = productos.filter((producto) => producto.marca === marca)
        setItems(filtro)
    } ,[marca])
    

    return(
        <>
            {items.map((producto) =><Item  producto={producto} key={producto.id}/> )}

        </>
    )
}

export default ItemFilter