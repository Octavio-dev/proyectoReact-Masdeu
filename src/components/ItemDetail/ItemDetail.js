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
                <CardHeader>{productos.name}</CardHeader>
                <CardDescription>{productos.description}</CardDescription>
                <CardDescription>${productos.precio}</CardDescription>
            </CardContent>
            <CardContent extra>
                <ItemCount stock={productos.stock} init={0}/>
            </CardContent>    
        </Card> 
    )
}

export default ItemDetail