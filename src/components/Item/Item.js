import React from "react";

//semantic ui
import {Image, Card, CardContent, CardHeader, CardDescription} from "semantic-ui-react"

//componentes
import ItemCount from "../ItemCount/ItemCount";

const Item = ({img, name, description, stock}) => {


    return(
        <Card>
            <Image src={img} />
            <CardContent>
                <CardHeader>{name}</CardHeader>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardContent extra>
                <ItemCount stock={stock} init={0}/>
            </CardContent>    
        </Card>   
    )
}

export default Item