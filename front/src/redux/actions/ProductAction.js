import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT,  TOGGLE_FALSE, TOGGLE_TRUE
  } from "../types"
import axios from"axios"


export const  getAllProducts= ()=>async (dispatch) => {
    try {
    const res= await axios.get('/api/product');
    dispatch({type:GET_ALL_PRODUCTS, payload: res.data});
    } catch (error) {
        console.log (error);
        
    }


};


export const addProduct = formData => async dispatch => {

    try {
         await axios.post('/api/product',formData);
    dispatch(getAllProducts())
        
    } catch (error) {
        console.log (error);
    }
};


export const deleteProduct =(id)=>async dispatch =>{
 try {
     await axios.delete(`/api/product/${id}`)
     dispatch(getAllProducts())
     
 } catch (error) {
     console.log(error)
     
 }



};


export const editProduct =(id, formData)=>async dispatch=>{
    try {
 await axios.put(`/api/product/${id}`, formData);
 dispatch(getAllProducts());

        
    } catch (error) {
        console.log(error);
    }
};

export const toggleTrue = ()=>{
 return{
     type:TOGGLE_TRUE
    }

}


export const toggleFalse =()=>{
    return{type:TOGGLE_FALSE}


}

export const getOneProduct=(id)=>async(dispatch)=> {
    try { 
        const res = await axios.get(`/api/product/${id}`);
        dispatch({type:GET_ONE_PRODUCT, payload:res.data});
        
    } catch (error) {
        console.log(error);
    }

}
