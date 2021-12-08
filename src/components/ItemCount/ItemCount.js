import React, {useState} from "react";

//ROUTER
import { Link } from "react-router-dom";

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
      console.log("compraste algo")
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
                <Link to="/cart"><button onClick={comprar}>Agregar al carrito</button></Link>
            </div>   
        </>
    )
}

export default ItemCount