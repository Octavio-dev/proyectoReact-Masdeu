import React  from "react"

//ROUTER
import { Link } from "react-router-dom"

//SEMANTIC UI
import {Icon} from "semantic-ui-react"

import {carro} from "../../cartContext"

function CartWidjet() {

    const totalProd = carro.reduce( (acc, prod) => acc += prod.cantidad, 0)

    return(
           <Link to="/cart">
                <button className="cart">
                    <Icon className="iconCart" name = "shopping cart" color ="yellow" size="big"/>
                    <small>{totalProd}</small>
                </button>
           </Link>
    )
}

export default CartWidjet