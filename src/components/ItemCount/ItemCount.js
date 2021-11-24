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
                <a onClick={disminuir}> <Icon name="minus circle" size="large"/> </a>
                <a onClick={aumentar}> <Icon name="plus circle" size="large"/> </a>
            </div>   
        </>
    )
}

export default ItemCount