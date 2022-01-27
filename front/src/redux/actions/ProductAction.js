
import { Get_All_Products } from "../types"
import axios from"axios"


export const  getAllProducts= ()=>async dispatch => {
    try {
    const res= await axios.get('/api/products');
    dispatch({type:Get_All_Products, payload: res.data});
    } catch (error) {
        console.log (error);
        
    }


};