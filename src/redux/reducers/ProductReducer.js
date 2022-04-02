import Data from "../../Data";
import * as actions from "../actions/productAction";

const initialState = {
  products: Data,
  cart: [],
  total: 0,

  currentUser: {},
};

const productReducer = (state = initialState, action) => {
  if (action.type === actions.ADDTOCART) {
    console.log(action.payload);
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }
  return state;
};
export default productReducer;
