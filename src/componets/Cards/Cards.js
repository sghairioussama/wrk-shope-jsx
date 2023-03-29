import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cards = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
     {props.children}
      <Card.Body>
        <Card.Title> {props.title}</Card.Title>
        <Card.Text>
          {props.mark}
        </Card.Text>
        <Card.Text>
         {props.price}

        </Card.Text>
      
        <Button variant="primary">Acheter</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards
