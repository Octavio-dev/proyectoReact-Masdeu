import React, {useEffect, useState, useContext} from "react";

//ROUTER
import { useParams } from "react-router";

//componentes
import ItemDetail from "../../components/ItemDetail/ItemDetail"

//context
import { ItemContext } from "../../context/ItemContext";

//css
 import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [productos] = useContext(ItemContext)
    let {id} = useParams()
    const [arrayFiltrado, setArrayFiltrado] = useState([])
    
    useEffect( () => {
        
        const filtrado = productos.filter((prod) => id === prod.id)
        setArrayFiltrado(filtrado[0])        

    },[id])


    return(
        <>
         <ItemDetail arrayFiltrado={arrayFiltrado} />
        </>
    )
}

export default ItemDetailContainer