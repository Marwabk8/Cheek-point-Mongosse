import { combineReducers } from "redux";
import productReducer from './productsReducers'

const rootReducer = combineReducers({
 productReducer,  
});
export default rootReducer;