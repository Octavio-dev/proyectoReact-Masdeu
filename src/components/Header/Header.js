import React from "react";
import "./Header.css"


const Header = ({title,a1,a2,a3,a4}) => {

    return (
        <div className="Header">
            <h1>{title}</h1>
            <div>
                <ul className="navBar">
                    <li><a href="">{a1}</a></li>
                    <li><a href="">{a2}</a></li>
                    <li><a href="">{a3}</a></li>
                    <li><a href="">{a4}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header