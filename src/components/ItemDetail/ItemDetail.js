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
                <CardHeader>{arrayFiltrado.marca}</CardHeader>
                <CardDescription>{arrayFiltrado.modelo}</CardDescription>
                <CardDescription>${arrayFiltrado.precio}</CardDescription>
            </CardContent>
            <CardContent extra>
                {arrayFiltrado.stock > 0 ? <ItemCount productos={arrayFiltrado} init={0}/> : <p>No hay Stock</p>}              
            </CardContent>  
        </Card> 
    )
}

export default ItemDetail