import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router";

//componentes

import ItemDetail from "../../components/ItemDetail/ItemDetail"

//context
import { ItemContext } from "../../ItemContext";

//css
 import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [productos, setProductos] = useContext(ItemContext)
    let {id} = useParams()
    const [arrayFiltrado, setArrayFiltrado] = useState([])
    const filtrado = productos.filter((prod) => id === prod.id)
    console.log(filtrado)

    useEffect( () => {
        
        setArrayFiltrado(filtrado[0])        

    },[id])


    return(
        <>
         <ItemDetail arrayFiltrado={arrayFiltrado} key={arrayFiltrado.id}/>
        </>
    )
}

export default ItemDetailContainer