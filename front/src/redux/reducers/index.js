import { combineReducers } from "redux";
import productsReducers from './productsReducers'

const rootReducer = combineReducers({
 productsReducers,  
});
export default rootReducer;