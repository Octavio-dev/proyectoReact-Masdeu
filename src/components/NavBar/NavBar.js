import React from "react";

//Router

import { Link } from "react-router-dom";

//CSS
import "./NavBar.css"

//Componentes
import CartWidjet from "./cartWidjet";

function NavBar ({a1,a2,a3,a4,a5, a6}) {

    return(
        <div className="navContenedor">
            <ul className="navBar">
                <Link className="Link" to="/category">{a1}</Link>
                <Link className="Link" to="/category">{a2}</Link>
                <Link className="Link" to="/category">{a3}</Link>
                <Link className="Link" to="/category">{a4}</Link>
                <Link className="Link" to="/category">{a5}</Link>
                <Link className="Link" to="/category">{a6}</Link>
            </ul>
            <CartWidjet />
        </div>

    )
}

export default NavBar