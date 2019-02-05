import { api } from "../../api/init";
import {
  FETCH_EVENTS_ACTION,
  LOAD_EVENTS_ACTION,
  EVENTS_FETCH_ERROR_ACTION,  
} from "../actions/constants/types";

export const fetchEventsList = (userRoute) => async dispatch => {
 try {
  const response = await api.get(userRoute);

  dispatch({
    type: FETCH_EVENTS_ACTION,
    payload: response.data
  });
 } catch (error) {
  dispatch({
    type: EVENTS_FETCH_ERROR_ACTION,
    payload: {error: true}
  });
 }
};

export const loadEventsList = (url) => async dispatch => {
  // Fetch data from api with axios.get
  console.log("loadEventsList Page");

  //Dispatch the data to store
  dispatch({
    type: LOAD_EVENTS_ACTION,
    // payload: page
  });
    //Return load error in case of error
  };
