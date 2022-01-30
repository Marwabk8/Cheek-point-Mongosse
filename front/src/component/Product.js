import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/ProductAction';
import ProductCard from './ProductCard';

function Product () {
 const products= useSelector(state=>state.productsReducers.products)
 const dispatch= useDispatch()

 useEffect(()=>{
   dispatch (getAllProducts())
 },[]);
 


  return( 
  
  <div className='carte'>
{products.map( el=><ProductCard product={el} key={el._id}/>)}


  </div>
  );
}

export default Product;
