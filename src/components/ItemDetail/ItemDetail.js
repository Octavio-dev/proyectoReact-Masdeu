import React from "react";

//comnponentes

import ItemCount from "../ItemCount/ItemCount";

//semantic UI

import {Card, Image, CardContent,CardHeader,CardDescription} from "semantic-ui-react"

const ItemDetail = ({productos}) => {

    return(
        <Card>
            <Image src={productos.img} />
            <CardContent>
                <CardHeader>{productos.marca}</CardHeader>
                <CardDescription>{productos.modelo}</CardDescription>
                <CardDescription>${productos.precio}</CardDescription>
            </CardContent>
            <CardContent extra>
                {productos.stock > 0 ? <ItemCount productos={productos} init={0}/> : <p>No hay Stock</p>}
                
            </CardContent>    
        </Card> 
    )
}

export default ItemDetail