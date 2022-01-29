import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFalse } from '../redux/actions/ProductAction';

function Home() {
  const dispatch=useDispatch()

  return(
      
<div className='home'>
<Link to ='/products'>
<Button variant="secondary">Products List
</Button>{' '} 
</Link>
<Link to='/addEdit'>
<Button variant="secondary"onClick={()=>dispatch(toggleFalse())}>Add New Product </Button>{' '}
</Link>
  
  
  </div>
  
  )
}

export default Home;
