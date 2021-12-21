import React from "react";

const ItemCart = ({info}) => {

    const borrar = () => {

        if (info.cantidad > 0){
            info.cantidad--
        } 
    }

    return(
        <>
        {info.cantidad > 0 && 
            <div>
                <p>producto : {info.marca} {info.modelo}</p>
                <p>precio : {info.precio}</p>
                <p>cantidad {info.cantidad}: </p>
                <button onClick={borrar}>eliminar</button>
            </div>
        }
            
        </>
    )
}

export default ItemCart