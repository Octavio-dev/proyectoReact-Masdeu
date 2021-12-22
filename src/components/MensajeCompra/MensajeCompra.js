import React, {useContext} from "react";

//Components
import DetalleMensaje from "../DetalleMensaje/DetalleMensaje"

//context
import { CartContext } from "../../context/cartContext";


const MensajeCompra = ({id, values}) => {

    const [carro] = useContext(CartContext)

    return(
        <>
        <h2>Gracias por tu Compra</h2>
        {carro.map((prod) => <DetalleMensaje prod={prod} key={prod.id}/>)}
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