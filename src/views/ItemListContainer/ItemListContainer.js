import React from 'react'

//componentes
import ItemList from "../../components/ItemList/ItemList"

//css
import "./ItemListContainer.css"

const ItemListContainer = () => {

  return(
      <div className='ItemContainer'>
        <ItemList />
      </div>
  )
  }

export default ItemListContainer