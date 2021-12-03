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
            <NavBar a1="Fender" a2 ="Yamaha" a3="Jackson" a4="Epiphone" a5="P.R.S" a6="Ibanez"/>                
        </div>
    )
}

export default Header