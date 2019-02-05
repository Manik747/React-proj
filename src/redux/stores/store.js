/*
 * src/store.js
 */
import { createStore, applyMiddleware } from "redux";
// import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { browserHistory } from "react-router";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware))
);

export default store;
// export default store;


// import { createStore, applyMiddleware } from "redux";
// // import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "../reducers";

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(
//     applyMiddleware(...middleware)
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );
