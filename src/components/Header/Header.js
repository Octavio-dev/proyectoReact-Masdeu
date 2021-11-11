import React from "react";
import "./Header.css"


const Header = ({title, subtitle, img, color}) => {

    return (
        <div style={{backgroundColor : `${color}`}} className="header">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <background src={img}></background>
        </div>
    )
}

export default Header