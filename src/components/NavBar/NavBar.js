import React, { useContext} from "react";

//Router
import { Link } from "react-router-dom";

//context
import { ItemContext } from "../../ItemContext";

//CSS
import "./NavBar.css"

//Componentes
import CartWidjet from "./cartWidjet";

function NavBar ({a1,a2,a3,a4,a5, a6}) {

    const [productos, setProductos] = useContext(ItemContext)

    return(
        <div className="navContenedor">
            <ul className="navBar">
                <Link className="Link" to={"/category" + "fender"}>{a1}</Link>
                <Link className="Link" to={"/category" + "yamaha"}>{a2}</Link>
                <Link className="Link" to={"/category" + "jackson"}>{a3}</Link>
                <Link className="Link" to={"/category" + "epiphone"}>{a4}</Link>
                <Link className="Link" to={"/category" + "p.r.s"}>{a5}</Link>
                <Link className="Link" to={"/category" + "ibanez"}>{a6}</Link>
            </ul>
            <CartWidjet />
        </div>

    )
}

export default NavBar