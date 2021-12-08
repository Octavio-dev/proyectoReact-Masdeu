import React  from "react"

//ROUTER
import { Link } from "react-router-dom"

//SEMANTIC UI
import {Icon} from "semantic-ui-react"

function CartWidjet() {

    return(
           <Link to="/cart">
                <button className="cart">
                    <Icon className="iconCart" name = "shopping cart" color ="yellow" size="big"/>
                </button>
           </Link>
    )
}

export default CartWidjet