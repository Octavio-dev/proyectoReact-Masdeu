import React from "react";

//comnponentes

import ItemCount from "../ItemCount/ItemCount";

//semantic UI

import {Card, Image, CardContent,CardHeader,CardDescription} from "semantic-ui-react"

const ItemDetail = ({producto}) => {

    return(
        <Card>
            <Image src={producto.img} />
            <CardContent>
                <CardHeader>{producto.name}</CardHeader>
                <CardDescription>{producto.description}</CardDescription>
                <CardDescription>${producto.precio}</CardDescription>
            </CardContent>
            <CardContent extra>
                <ItemCount stock={producto.stock} init={0}/>
            </CardContent>    
        </Card> 
    )
}

export default ItemDetail