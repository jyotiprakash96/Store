import { combineReducers } from 'redux';
import ProductListReducer from './ProductListReducer';

const AppReducer = combineReducers({
  ProductListReducer:ProductListReducer
  
});

const RootReducer = (state, action) => {
  return AppReducer(state, action)
}

export default RootReducer;
