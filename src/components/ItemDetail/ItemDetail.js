import React from "react";

//css
import "./ItemDetail.css"

//componentes
import ItemCount from "../ItemCount/ItemCount";

//semantic UI
import {Card, Image, CardContent,CardHeader,CardDescription} from "semantic-ui-react"

const ItemDetail = ({arrayFiltrado}) => {

    return(
        <div className="detailContainer">
            <div className="imgContenedor">
                <img src={arrayFiltrado.img} />
            </div>        
            <div className="detalleContenedor">
                <h2><strong>MARCA</strong> :{arrayFiltrado.marca}</h2>
                <p><strong>MODELO:</strong> {arrayFiltrado.modelo}</p>
                <p><strong>CUERDAS:</strong> {arrayFiltrado.cuerdas}</p>
                <p><strong>MADERA DEL CUERPO:</strong> {arrayFiltrado.cuerpo}</p>
                <p><strong>MADERA DEL MASTIL:</strong> {arrayFiltrado.mastil}</p>
                <p><strong>CANT. MICROFONOS:</strong> {arrayFiltrado.microfonos}</p>
                <p><strong>ORIENTACION:</strong> {arrayFiltrado.orientacion}</p>
                <p><strong>PALANCA:</strong> {arrayFiltrado.palanca}</p>
                <p><strong>FUNDA :</strong>{arrayFiltrado.funda}</p>               
            </div>
            <div className="buttonContenedor">
            <small><strong>PRECIO: $</strong>{arrayFiltrado.precio}</small>
                {arrayFiltrado.stock > 0 ? <ItemCount productos={arrayFiltrado} init={0}/> : <p>No hay Stock</p>}              
            </div>  
        </div> 
    )
}

export default ItemDetail