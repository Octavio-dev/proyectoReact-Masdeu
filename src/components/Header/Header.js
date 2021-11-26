import React from "react";

//Router

import { Link } from "react-router-dom";

//components
import NavBar from "../NavBar/NavBar";

//css
import "./Header.css"


const Header = ({title}) => {
    return (
        
        <div className="Header">
            <Link className="titulo" to="/">{title}</Link>
            <NavBar a1="Guitarras" a2 ="Violines" a3="Bajo" a4="Flautas"/>                
        </div>
    )
}

export default Header