import React, {useContext} from "react";


const DetalleMensaje = ({prod}) => {

    const precio = prod.precio * prod.cantidad
    return(
        <>
            <p>Compraste {prod.cantidad} {prod.marca} {prod.modelo}</p>
            <small>$ {precio}</small>
        </>
    )
}

export default DetalleMensaje