import React from "react";

//css
import "./CartContainer.css"

//Context
import {  carro } from "../../cartContext";

//Components
import Cart from "../../components/Cart";
import CarroVacio from "../../components/CarroVacio/CarroVacio";

const CartContainer = () => {

    const precioTotal = carro.reduce( (acc, prod) => acc += prod.cantidad * prod.precio, 0)

    return(
        <div className="CartContainer">
                <h1 className="CartTitle">CARRITO</h1>
            <div className="CartProducts">
                {carro.length === 0 ? <CarroVacio /> : carro.map((car) => <Cart info={car} key={car.id}/>)}
            </div>
            <div className="CartTotal">
                <small>Total :<strong>{precioTotal}</strong></small>
                <div className="CartButtons">
                    <button>Borrar todo</button>
                    <button>Comprar todo</button>
                </div>
            </div>
        </div>
    )
}

export default CartContainer