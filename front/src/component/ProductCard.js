import React from 'react';

import { Button, Card} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct, toggleTrue } from '../redux/actions/ProductAction';


function ProductCard({product}) {
 const dispatch=useDispatch()
 const navigate=useNavigate()
 const handelDelete=()=>{
   if (window.confirm("Are you sure")){
   dispatch(deleteProduct(product._id))
 }
}

  return( 
  <div>
  <Link to='/products'>
<Card style={{ width: '18rem' }}>

  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title> Brands:{product.brands} </Card.Title>
    <Card.Title> Reference :{product.reference}</Card.Title>
    <Card.Title> Price :{product.price}</Card.Title>
    <Button variant="danger" onClick={handelDelete}>Delete</Button>
    <Button variant="success" onClick={()=>{dispatch(toggleTrue());navigate('/addEdit')}}>Edit</Button>{' '}
  </Card.Body>
</Card>
</Link>
  </div>
  )
}

export default ProductCard;
