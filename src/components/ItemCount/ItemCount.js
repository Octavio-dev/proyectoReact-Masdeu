import React, {useState} from "react";

const ItemCount = () => {

    const [stock, setStock] = useState(0)

    const aumentar = () => setStock(stock + 1)
    const disminuir = () => {
        if(stock >= 1){           
            setStock(stock - 1)
        }
    }

    return(
        <>
            <div>
                <p>Cantidad:{stock}</p>
            </div>
            <div>
                <button onClick={disminuir}>-</button>
                <button onClick={aumentar}>+</button>
            </div>   
        </>
    )
}

export default ItemCount