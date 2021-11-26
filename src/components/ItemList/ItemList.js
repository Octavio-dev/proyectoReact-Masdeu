import React, {useEffect, useState} from "react";

//componentes
import Item from "../Item/Item"

const ItemList = () => {

    const [productos, setProductos] = useState([])

    useEffect( () => {
        
        setTimeout(() => {

            fetch("productos.json")
            .then((response) => response.json())
            .then((json) => setProductos(json))
        },2000)
    },[])

    return(
        <>
            {productos.map((producto) => <Item  name={producto.tipo} description={producto.name} img={producto.img} key={producto.id}/>)}
        </>
    )
}

export default ItemList