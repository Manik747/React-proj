/*
 src/reducers/simpleReducer.js
*/
import { SIMPLE_ACTION } from "../actions/constants/types";

const initialState = {
  result: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return { ...state, result: action.payload };
    default:
      return state;
  }
};
