import React from "react";

import { Link } from "react-router-dom";

//semantic ui
import {Image, Card, CardContent, CardHeader, CardDescription} from "semantic-ui-react"

//componentes

const Item = ({img, name, description}) => {


    return(
        <Link to="/item:id">
        <Card>
            <Image src={img} />
            <CardContent>
                <CardHeader>{name}</CardHeader>
                <CardDescription>{description}</CardDescription>
            </CardContent>  
        </Card>
        </Link>   
    )
}

export default Item