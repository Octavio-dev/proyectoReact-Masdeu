import React from "react";
import "./Header.css"


const Header = ({title}) => {

    return (
        <div className="Header">
            <h1>{title}</h1>
            <div>
                <ul className="navBar">
                    <li><a href="">menu</a></li>
                    <li><a href="">menu</a></li>
                    <li><a href="">menu</a></li>
                    <li><a href="">menu</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header