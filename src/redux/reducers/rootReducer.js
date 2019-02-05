/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
// import { routerReducer } from "react-router-redux";
import simpleReducer from './simpleReducer';
import authReducer from "./authReducer";
import reduxFormReducer from "./reduxFormReducer";
import eventsReducer from "./eventsReducer";

export default combineReducers({
  simpleReducer,
  auth: authReducer,
  events: eventsReducer,
  forms: reduxFormReducer,
  // routerReducer,
});
