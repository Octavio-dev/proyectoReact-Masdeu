import React from "react";
import "./Header.css"
import {icon} from "semantic-ui-react"


const Header = ({title,a1,a2,a3,a4}) => {

    return (
        <div className="Header">
            <h1>{title}</h1>
            <div>
                <ul className="navBar">
                    <li><a href="https://github.com/Octavio-dev/proyectoReact-Masdeu.git">{a1}</a></li>
                    <li><a href="https://github.com/Octavio-dev/proyectoReact-Masdeu.git">{a2}</a></li>
                    <li><a href="https://github.com/Octavio-dev/proyectoReact-Masdeu.git">{a3}</a></li>
                    <li><a href="https://github.com/Octavio-dev/proyectoReact-Masdeu.git">{a4}</a></li>
                </ul>
                <icon name ="shopping cart" />
            </div>
        </div>
    )
}

export default Header