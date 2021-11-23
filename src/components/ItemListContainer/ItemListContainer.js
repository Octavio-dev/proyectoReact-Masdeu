import React from 'react'

//semanticUi
import { Card, Image } from 'semantic-ui-react'

//componentes
import ItemCount from '../ItemCount/ItemCount'



const ItemListContainer = ({name, date, description, img}) => {

  return(
  <Card>
    <Image src ={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{date}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <ItemCount />
    </Card.Content>
  </Card>
  )
  }

export default ItemListContainer