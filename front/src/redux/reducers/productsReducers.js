
import { GET_ALL_PRODUCTS, TOGGLE_FALSE, TOGGLE_TRUE} from "../types";

const initstate =
{

products: [],
loading:true,
edit:false

};

const productsReducers= (state= initstate,{type,payload}) =>{
switch (type) {
    case GET_ALL_PRODUCTS:
    return{...state,products:payload,loading:false}
      
    case TOGGLE_TRUE:
    return{...state,edit:true}

    case TOGGLE_FALSE:
        return{...state,edit:false}

    default:
       return state;
}


}
export default productsReducers;