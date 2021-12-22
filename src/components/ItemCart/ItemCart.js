import React from "react";

//semantic
import { Icon } from "semantic-ui-react";
//css 
import "./ItemCart.css"

const ItemCart = ({info}) => {

    const borrar = () => {

        if (info.cantidad > 0){
            info.cantidad--
        } 
    }

    return(
        <>
        {info.cantidad > 0 && 
            <div className="ItemCart">
                <p>producto : {info.marca} {info.modelo}</p>
                <p>precio : {info.precio}</p>
                <p>cantidad {info.cantidad}: </p>
                <button onClick={borrar}><Icon name="trash"/></button>
            </div>
        }
            
        </>
    )
}

export default ItemCart