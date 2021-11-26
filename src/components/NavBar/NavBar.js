import React from "react";
import "./NavBar.css"
import CartWidjet from "./cartWidjet";

function NavBar ({a1,a2,a3,a4}) {

    return(
        <div className="navContenedor">
            <ul className="navBar">
                <li><a href="https://github.com/Octavio-dev/proyectoReact-Masdeu.git">{a1}</a></li>
                <li><a href="https://github.com/Octavio-dev/proyectoReact-Masdeu.git">{a2}</a></li>
                <li><a href="https://github.com/Octavio-dev/proyectoReact-Masdeu.git">{a3}</a></li>
                <li><a href="https://github.com/Octavio-dev/proyectoReact-Masdeu.git">{a4}</a></li>
            </ul>
            <CartWidjet />
        </div>

    )
}

export default NavBar