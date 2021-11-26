import React from "react";

//semantic ui
import {Image, Card, CardContent, CardHeader, CardDescription} from "semantic-ui-react"

//componentes

const Item = ({img, name, description}) => {


    return(
        <Card>
            <Image src={img} />
            <CardContent>
                <CardHeader>{name}</CardHeader>
                <CardDescription>{description}</CardDescription>
            </CardContent>  
        </Card>   
    )
}

export default Item