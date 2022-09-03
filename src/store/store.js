import reducers from "./allReducers";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  { reducer: reducers },
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
