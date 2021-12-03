import React, {useEffect, useState} from "react";
import { useParams } from "react-router";

//componentes

import ItemDetail from "../../components/ItemDetail/ItemDetail"

//css
 import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    let {id} = useParams()

    useEffect( () => {

        setTimeout(() => {

            fetch("productos.json")
            .then((response) => response.json())
            .then((json) => setProductos((json.guitarras)[id-1]))
        },1000)
    },[id])


    return(
        <>
         <ItemDetail productos={productos} key={productos.id}/>
        </>
    )
}

export default ItemDetailContainer