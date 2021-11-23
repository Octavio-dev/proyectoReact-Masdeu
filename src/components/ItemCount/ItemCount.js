import React, {useState} from "react";

const ItemCount = ({stock, init}) => {

    const [cantidad, setCantidad] = useState(init)

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
                <button onClick={disminuir}>-</button>
                <button onClick={aumentar}>+</button>
            </div>   
        </>
    )
}

export default ItemCount