import cartReducers from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  carts: cartReducers 
});

export default rootReducer;