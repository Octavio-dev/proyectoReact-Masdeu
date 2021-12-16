import React from "react";

//comnponentes

import ItemCount from "../ItemCount/ItemCount";

//semantic UI

import {Card, Image, CardContent,CardHeader,CardDescription} from "semantic-ui-react"

const ItemDetail = ({arrayFiltrado}) => {

    console.log(arrayFiltrado)

    return(
        <Card>
            <Image src={arrayFiltrado.img} />
            <CardContent>
                <CardHeader><strong>MARCA</strong> :{arrayFiltrado.marca}</CardHeader>
                <CardDescription><strong>MODELO:</strong> {arrayFiltrado.modelo}</CardDescription>
                <CardDescription><strong>CUERDAS:</strong> {arrayFiltrado.cuerdas}</CardDescription>
                <CardDescription><strong>MADERA DEL CUERPO:</strong> {arrayFiltrado.cuerpo}</CardDescription>
                <CardDescription><strong>MADERA DEL MASTIL:</strong> {arrayFiltrado.mastil}</CardDescription>
                <CardDescription><strong>CANT. MICROFONOS:</strong> {arrayFiltrado.microfonos}</CardDescription>
                <CardDescription><strong>ORIENTACION:</strong> {arrayFiltrado.orientacion}</CardDescription>
                <CardDescription><strong>PALANCA:</strong> {arrayFiltrado.palanca}</CardDescription>
                <CardDescription><strong>FUNDA :</strong>{arrayFiltrado.funda}</CardDescription>
                
            </CardContent>
            <CardContent extra>
            <CardDescription><strong>PRECIO: $</strong>{arrayFiltrado.precio}</CardDescription>
                {arrayFiltrado.stock > 0 ? <ItemCount productos={arrayFiltrado} init={0}/> : <p>No hay Stock</p>}              
            </CardContent>  
        </Card> 
    )
}

export default ItemDetail