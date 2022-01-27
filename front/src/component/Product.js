
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/ProductAction';
import ProductCard from './ProductCard';

function Product () {
 const products = useSelector(state=>state.productReducers.products)
 const dispatch= useDispatch()

 useEffect(()=>{
   dispatch (getAllProducts())
 },[]);


  return( 
  
  <div>
{products.map( product=><ProductCard product={product} key={product._id}/>)}


  </div>
  );
}

export default Product;
