import reducers from "./allReducers";
import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({}),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
