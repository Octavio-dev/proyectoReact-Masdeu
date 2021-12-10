import React from "react";

//css
import "./CartContainer.css"

//Context
import {  carro } from "../../cartContext";

//Components
import Cart from "../../components/Cart";

const CartContainer = () => {

    return(
        <div className="CartContainer">
            <div >
                <h1 className="CartTitle">CARRITO</h1>
            </div>
            <div className="CartProducts">
                {carro.length > 0 && carro.map((car) => <Cart info={car} key={car.id}/>)}
            </div>
            <div className="CartTotal">
                <small>Total :<strong>0</strong></small>
                <div>
                    <button>Borrar todo</button>
                    <button>Comprar todo</button>
                </div>
            </div>
        </div>
    )
}

export default CartContainer