
import React, { useEffect, useState } from 'react';
import {Button, Form} from 'react-bootstrap'
import {useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { addProduct, editProduct } from '../redux/actions/ProductAction';

function AddEdit() {

  const[formData,setFormData]=useState({brands:"",reference:"",price:0})
  const dispatch =useDispatch()
 const edit=useSelector(state=>state.productsReducers.edit)
 const product=useSelector(state=>state.productsReducers.product)
const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
 const navigate= useNavigate()


  const handleAdd=(e)=>{
    e.preventDefault();
    dispatch(addProduct(formData));
    navigate('/products')
    };

  const handleEdit=(e)=>{
    e.preventDefault()
    dispatch(editProduct(product._id,formData))
    navigate('/products')
  }

    useEffect(()=>{
      edit ? setFormData({brands:product.brands,reference:product.reference,price:product.price})
      : setFormData({brands:"",reference:"",price:0})
    },[product])

  return (
  <div className='addedit'>

<Form>
  <Form.Group className="mb-3" controlId="">
    <Form.Label>Brands</Form.Label>
    <Form.Control type="" placeholder="" name ="brands" value ={formData.brands} onChange={handleChange}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Reference</Form.Label>
    <Form.Control type="" placeholder=""  name="reference" value ={formData.reference} onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Price</Form.Label>
    <Form.Control type="" placeholder="" name="price"value ={formData.price} onChange={handleChange}/>
  </Form.Group>
 
{
edit ? (
  <Button variant="primary" type="submit" onClick={handleEdit}>Edit</Button>
 ) : (
<Button variant="primary" type="submit" onClick={handleAdd}>Add</Button>
 )}
  
</Form>




  </div>
  
  )
}

export default AddEdit;
