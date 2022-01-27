
import { Get_All_Products } from "../types";

const initstate =
{

products: [],
loading:true

};

const productReducers= (state= initstate,{type,payload}) =>{
switch (type) {
    case Get_All_Products:
    return{...state,products:payload,loading:false}
       

    default:
       return state
}


}
export default productReducers;