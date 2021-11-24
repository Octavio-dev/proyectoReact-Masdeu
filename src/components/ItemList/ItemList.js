import React from "react";

//componentes
import Item from "../Item/Item"

//imagenes provisionales
import lesPaul01 from "./lesPaul.png"
import lesPaul02 from "./lesPaul02.jpg"
import lesPaul03 from "./lesPaul03.jpg"
import violin from "./violin02.png"

const ItemList = () => {


    return(
        <>
            <Item name="guitar" description="guitarra en español" img={lesPaul01} stock={10}/>
            <Item name="guitar2" description="guitarra2 en español" img={lesPaul02} stock={5}/>
            <Item name="guitar3" description="guitarra3 en español" img={lesPaul03} stock={2}/>
            <Item name="violin" description="violin en español" img={violin} stock={0}/>
        </>
    )
}

export default ItemList