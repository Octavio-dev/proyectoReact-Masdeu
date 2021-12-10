import React from "react";

//Context

import {  carro } from "../../cartContext";

const Cart = () => {

    return(
        <>
            <h1>Carrito</h1>
            <h2>Cantidad de producutos: {carro.length}</h2>
            <h3>Total: {carro.length >= 1 ? <p>{carro[0].precio}</p> : <p>0</p>} </h3>
        </>
    )
}

export default Cart