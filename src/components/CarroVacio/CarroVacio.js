import React from "react";

//Router
import { Link } from "react-router-dom";

const CarroVacio = () => {

    return(
        <>
            <h2>No se Encontraron productos</h2>
            <Link to="/"> Apreta aca para volver a la tienda </Link>
        </>
    )
}

export default CarroVacio