
import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { addProduct } from '../redux/actions/ProductAction';

function AddEdit() {

  const[formData,setFormData]=useState({brands:"",reference:"",price:0})
  const dispatch =useDispatch()
 const edit=useSelector(state=>state.productsReducers.edit)
const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
 const navigate= useNavigate()


  const handleAdd=(e)=>{
    e.preventDefault();
    dispatch(addProduct(formData));
    navigate('/products')
    }

  return (
  <div>

<Form>
  <Form.Group className="mb-3" controlId="">
    <Form.Label>Brands</Form.Label>
    <Form.Control type="email" placeholder="" name ="brands" onChange={handleChange}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Reference</Form.Label>
    <Form.Control type="" placeholder=""  name="reference"onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Price</Form.Label>
    <Form.Control type="" placeholder="" name="price"onChange={handleChange}/>
  </Form.Group>
 
{
edit ? (
  <Button variant="primary" type="submit">Edit</Button>
 ) : (
<Button variant="primary" type="submit" onClick={handleAdd}>Add</Button>
 )}
  
</Form>




  </div>
  
  )
}

export default AddEdit;
