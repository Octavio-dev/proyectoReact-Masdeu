import React, {useState} from "react";
import { Icon } from 'semantic-ui-react'

const ItemCount = ({stock, init}) => {

    const [cantidad, setCantidad] = useState(init)

    //funciones para aumentar o disminuir la cantidad
    const aumentar = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }
    const disminuir = () => {
        if(cantidad >= 1){           
            setCantidad(cantidad - 1)
        }
    }

    return(
        <>
            <div>
                <p>Cantidad:{cantidad}</p>
                <small>Stock:{stock}</small>
            </div>
            <div>
                <button onClick={disminuir}> <Icon name="minus circle" size="large"/> </button>
                <button onClick={aumentar}> <Icon name="plus circle" size="large"/> </button>
            </div>   
        </>
    )
}

export default ItemCount