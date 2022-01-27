import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return(
      
<div className='home'>
<Link to ='/products'>
<Button variant="secondary">Products List
</Button>{' '} 
</Link>
<Link to='/addEdit'>
<Button variant="secondary">Add New Product </Button>{' '}
</Link>
  
  
  </div>
  
  )
}

export default Home;
