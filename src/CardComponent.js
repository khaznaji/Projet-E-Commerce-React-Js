import React from "react";
import {Card} from "react-bootstrap";
function CardComponent (props){
    return (
      
        <>
  <Card border="primary" style={{ width: '15rem' , marginBottom :10}}>
    <Card.Header>{props.valueItem.title}</Card.Header>
    <img src={props.valueItem.image} />
    <Card.Body>
      <Card.Title>{props.valueItem.price}$</Card.Title>
      <Card.Text>
      
      </Card.Text>
      
     </Card.Body>
  </Card>
 
  <br />
</>
    );
}

export default CardComponent;
