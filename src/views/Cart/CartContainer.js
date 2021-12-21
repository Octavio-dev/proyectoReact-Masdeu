import React,{useContext} from "react";

//css
import "./CartContainer.css"

//Context
import {  CartContext } from "../../cartContext";

//Components
import Cart from "../../components/Cart";
import CarroVacio from "../../components/CarroVacio/CarroVacio";

const CartContainer = () => {

    const [carro] = useContext(CartContext)

    const cantTotal = carro.reduce( (acc, prod) => acc += prod.cantidad, 0)
    const precioTotal = carro.reduce( (acc, prod) => acc += prod.cantidad * prod.precio, 0)

    return(
        <div className="CartContainer">
                <h1 className="CartTitle">CARRITO</h1>
            <div className="CartProducts">
                {cantTotal > 0 ? carro.map((car) => <Cart info={car} key={car.id}/>) : <CarroVacio />}
            </div>
            <div className="CartTotal">
                <small>cantidad total :<strong>{cantTotal}</strong></small>
                <small>Precio Final :<strong>{precioTotal}</strong></small>
                <form className="CartButtons">
                    <button>Borrar todo</button>
                    <button>Comprar todo</button>
                </form>
            </div>
        </div>
    )
}

export default CartContainer