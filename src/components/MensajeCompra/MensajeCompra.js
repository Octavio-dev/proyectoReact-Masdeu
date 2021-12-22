import React, {useContext} from "react";

//context
import { CartContext } from "../../context/cartContext";

const MensajeCompra = ({id, values}) => {

    const [carro] = useContext(CartContext)
    console.log(carro)

    return(
        <>
        <h2>Gracias por tu Compra</h2>
        <p>compraste {carro.cantidad} {carro.marca} {carro.modelo} a ${carro.precio}</p>
        <h3>detalles del comprador</h3>
        <ul>
            <li>nombre: {values.nombre}</li>
            <li>apellido: {values.apellido}</li>
            <li>email : {values.email}</li>
            <li>ID de compra : {id.id}</li>
        </ul>
        </>
    )
}

export default MensajeCompra