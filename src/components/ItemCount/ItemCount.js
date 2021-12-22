import React, {useState, useContext} from "react";

//css
import "./ItemCount.css"

//context
import { CartContext } from "../../context/cartContext";

//SEMANTIC
import { Icon } from 'semantic-ui-react'

const ItemCount = ({productos, init}) => {
    
    const [cantidad, setCantidad] = useState(init)
    const [carro] = useContext(CartContext)

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
        
        const enCarro = carro.find((prod) => prod.id === productos.id)
             
        if(enCarro){
            enCarro.cantidad++
        } else{      
            carro.push({
                id:productos.id,
                marca:productos.marca,
                modelo:productos.modelo,
                precio:productos.precio,
                cantidad:1 * cantidad
            }) 
        }
    }

    return(
        <>
            <div className="Cantidad">
                <p>Cantidad:{cantidad}</p>
                <small>Stock:{productos.stock}</small>
            </div>
            <div >
                <div>
                    <button className="botones" onClick={disminuir}> <Icon name="minus circle" size="large"/> </button>
                    <button className="botones" onClick={aumentar}> <Icon name="plus circle" size="large"/> </button>
                </div>
                <button className="compra" onClick={comprar}>Agregar al carrito</button>
            </div>   
        </>
    )
}

export default ItemCount