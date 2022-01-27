import React from 'react';

import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({product}) {
  return( 
  <div>
  <Link to='/products'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title> Brands:{product.brands} </Card.Title>
    <Card.Title> Reference :{product.reference}</Card.Title>
    <Card.Title> Price :{product.price}</Card.Title>
   
  </Card.Body>
</Card>
</Link>
  </div>
  )
}

export default ProductCard;
