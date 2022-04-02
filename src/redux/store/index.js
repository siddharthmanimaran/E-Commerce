import productReducer from "../reducers/ProductReducer";
import { createStore } from "redux";

const store = createStore(productReducer);
export default store;
