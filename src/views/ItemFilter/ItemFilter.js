import React, {useContext, useEffect, useState} from "react";

//css
import "./ItemFilter.css"

//Router
import { useParams } from "react-router-dom";

//CONTEXT
import {ItemContext} from "../../context/ItemContext"

//componentes
import Item from "../../components/Item/Item"

const ItemFilter = () => {

    const [productos] = useContext(ItemContext)
    const [items, setItems] = useState([])
    let {marca} = useParams()

    useEffect(() => {
        const filtro = productos.filter((producto) => producto.marca === marca)
        setItems(filtro)
    } ,[marca])
    

    return(
        <div className="ItemFilter">
            {items.map((producto) =><Item  producto={producto} key={producto.id}/> )}

        </div>
    )
}

export default ItemFilter