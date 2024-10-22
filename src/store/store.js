import{createStore,combineReducers} from "redux";
import counterReducer from "./counter.reducer";
import todoReducer from "./todolist.reducer";
import productReducer from "./product.reducer";
import { RouterProvider } from "react-router-dom";
var store=createStore(combineReducers({counterReducer,todoReducer,productReducer}))
export default store