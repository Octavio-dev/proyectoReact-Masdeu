import React, {useState} from "react";

//SEMANTIC
import { Icon } from 'semantic-ui-react'

const ItemCount = ({productos, init}) => {

    const [cantidad, setCantidad] = useState(init)

    //funciones para aumentar o disminuir la cantidad
    const aumentar = () => {
        if(cantidad < productos.stock){
            setCantidad(cantidad + 1 )
        }
    }
    const disminuir = () => {
        if(cantidad >= 1){           
            setCantidad(cantidad - 1)
        }
    }

    const comprar = () => {
        alert(`compraste una ${productos.marca} ${productos.modelo}`)
    }

    return(
        <>
            <div>
                <p>Cantidad:{cantidad}</p>
                <small>Stock:{productos.stock}</small>
            </div>
            <div>
                <div>
                    <button onClick={disminuir}> <Icon name="minus circle" size="large"/> </button>
                    <button onClick={aumentar}> <Icon name="plus circle" size="large"/> </button>
                </div>
                <button onClick={comprar}>Agregar al carrito</button>
            </div>   
        </>
    )
}

export default ItemCount