import React from "react";

//Router
import { Link } from "react-router-dom";

//CSS
import "./NavBar.css"

//Componentes
import CartWidjet from "./cartWidjet";

const NavBar = ({a1,a2,a3,a4,a5, a6}) => {

    return(
        <div className="navContenedor">
            <ul className="navBar">
                <Link className="Link" to={"/categoryfender"}>{a1}</Link>
                <Link className="Link" to={"/categoryyamaha"}>{a2}</Link>
                <Link className="Link" to={"/categoryjackson"}>{a3}</Link>
                <Link className="Link" to={"/categoryepiphone"}>{a4}</Link>
                <Link className="Link" to={"/categoryp.r.s"}>{a5}</Link>
                <Link className="Link" to={"/categoryibanez"}>{a6}</Link>
                <Link className="Link" to="/formulario">form</Link>
            </ul>
            <CartWidjet />
        </div>

    )
}

export default NavBar