import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function ConfigureStore() {
  return createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
}
