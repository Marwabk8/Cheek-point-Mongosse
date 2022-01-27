import React from 'react';
import {Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function AddEdit() {
  return (
  <div>
    <Link to='/addEdit'>
<Form>
  <Form.Group className="mb-3" controlId="">
    <Form.Label>Brands</Form.Label>
    <Form.Control type="email" placeholder="" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Reference</Form.Label>
    <Form.Control type="" placeholder="" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Price</Form.Label>
    <Form.Control type="" placeholder="" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Link>


  </div>
  
  )
}

export default AddEdit;
