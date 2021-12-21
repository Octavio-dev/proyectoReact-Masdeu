import React  from "react"

//ROUTER
import { Link } from "react-router-dom"

//SEMANTIC UI
import {Icon} from "semantic-ui-react"

const CartWidjet = () => {

    return(
           <Link to="/cart">
                <button className="cart">
                    <Icon className="iconCart" name = "shopping cart" color ="yellow" size="big"/>
                    <small className="totalProd">{0}</small>
                </button>
           </Link>
    )
}

export default CartWidjet