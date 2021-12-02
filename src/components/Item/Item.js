import React from "react";

import { Link } from "react-router-dom";

//semantic ui
import {Image, Card, CardContent, CardHeader, CardDescription} from "semantic-ui-react"

//componentes

const Item = ({producto}) => {


    return(
        <Link to={"/item" + producto.id}>
        <Card>
            <Image src={producto.img} />
            <CardContent>
                <CardHeader>{producto.marca}</CardHeader>
                <CardDescription>{producto.modelo}</CardDescription>
            </CardContent>  
        </Card>
        </Link>   
    )
}

export default Item