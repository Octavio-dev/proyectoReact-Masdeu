import React, {useEffect, useState} from "react";

//componentes
import Item from "../Item/Item"

//imagenes provisionales
import lesPaul01 from "./lesPaul.png"
import lesPaul02 from "./lesPaul02.jpg"
import lesPaul03 from "./lesPaul03.jpg"
import violin from "./violin02.png"

const ItemList = () => {

    const [productos, setProductos] = useState([])

    useEffect( () => {
        fetch("productos.json")
        .then((response) => response.json())
        .then((json) => setProductos(json))
    },[])

    return(
        <>
            {productos.map((producto) => <Item  name={producto.tipo} description={producto.name} precio={producto.precio} img={producto.img} stock={producto.stock} key={producto.id}/>)}
        </>
    )
}

export default ItemList