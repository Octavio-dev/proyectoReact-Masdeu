import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css"


const Header = ({title}) => {
    return (
        
        <div className="Header">
            <h1>{title}</h1>
            <NavBar a1="Guitarras" a2 ="Violines" a3="Bajo" a4="Flautas"/>                
        </div>
    )
}

export default Header