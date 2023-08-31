import { PRODUCT_LIST_ERROR, PRODUCT_LIST_LOADING, PRODUCT_LIST_SUCCESS } from "../actions/ActionTypes";
import { ProductListnitialValues } from "../store/InitialStore";

export default function ProductListReducer(state = ProductListnitialValues, action) {
      const { type, payload } = action;
    
      switch (type) {
        case PRODUCT_LIST_LOADING:
          return {
            ...state,
            loading: true,
          };
        case PRODUCT_LIST_ERROR:
          return {
            ...state,
            loading: false,
          };
        case PRODUCT_LIST_SUCCESS:
          return {
            ...state,
            data: payload,
            loading: false,
          };
        default:
          return state;
      }
    }