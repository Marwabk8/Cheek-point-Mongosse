import React from 'react';

import { Button, Card} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, getOneProduct, toggleTrue } from '../redux/actions/ProductAction';


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
 
<Card style={{ width: '18rem' }}>

 
  <Card.Body>
    <Card.Title> Brands:{product.brands} </Card.Title>
    <Card.Title> Reference :{product.reference}</Card.Title>
    <Card.Title> Price :{product.price}</Card.Title>
    <Button variant="success" onClick={()=>{dispatch(getOneProduct(product._id));dispatch(toggleTrue());navigate('/addEdit')}}>Edit</Button>
    <Button variant="danger" onClick={handelDelete}>Delete</Button>
  </Card.Body>
</Card>

  </div>
  )
}

export default ProductCard;
