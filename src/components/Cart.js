import React from "react";

const Cart = ({info}) => {


    const borrar = () => {

        if (info.cantidad > 1){
            info.cantidad--
        } else{
            info.cantidad = null
        }
    }

    return(
        <>
            <div>
                <p>producto : {info.marca} {info.modelo}</p>
                <p>precio : {info.precio}</p>
                <p>cantidad {info.cantidad}: </p>
                <button onClick={borrar}>eliminar</button>
            </div>
        </>
    )
}

export default Cart