import React from "react";

//ROUTER
import { Link } from "react-router-dom";

//CSS
import "./Item.css"

//semantic ui
import {Image, Card, CardContent, CardHeader, CardDescription} from "semantic-ui-react"

//componentes

const Item = ({producto}) => {


    return(
        <Link className="Item" to={"/item" + producto.id}>
        <Card className="Card" color="orange">
            <Image className="CardImg" src={producto.img} />
            <CardContent className="Content">
                <CardHeader>{producto.marca}</CardHeader>
                <CardDescription>{producto.modelo}</CardDescription>
            </CardContent>  
        </Card>
        </Link>   
    )
}

export default Item