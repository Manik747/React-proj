import {
  REQUEST_AUTH_ACTION,
  AUTH_ACTION,
  LOGOUT_ACTION,
  AUTH_ERROR_ACTION,
  GET_SESSION_AUTHTOKEN_ACTION,
  NO_SESSION_TOKEN_ACTION
} from "../actions/constants/types";

const initialState = {
  loggedIn: false,
  logging: false,
  loggingFromSession: false,
  authenticatedUserEmail: null,
  authenticatedUserRole: null,
  authError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_AUTH_ACTION:
      return {
        ...state,
        logging: true,
        logout: false
      };
    case AUTH_ACTION:
      return {
        ...state,
        loggedIn: true,
        logging: false,
        logout: false,
        loggingFromSession: false,
        authenticatedUserEmail: action.payload.email,
        authenticatedUserRole: action.payload.role,
        authError: null
      };
    case GET_SESSION_AUTHTOKEN_ACTION:
      console.log('action.payload}}}} ', action.payload)
      return {
        ...state,
        loggedIn: true,
        logging: false,
        logout: false,
        loggingFromSession: true,
        authenticatedUserEmail: action.payload.email,
        authenticatedUserRole: action.payload.role,
        authError: null
      };
    case NO_SESSION_TOKEN_ACTION:
      return {
        ...state,
        loggedIn: false,
        logging: false,
        logout: false,
        loggingFromSession: false,
        authError: null
      };
    case LOGOUT_ACTION:
      return {
        ...state,
        loggedIn: false,
        logout: true,
        loggingFromSession: false,
        authenticatedUserEmail: null,
        authenticatedUserRole: null
      };
    case AUTH_ERROR_ACTION:
      return {
        ...state,
        logging: false,
        authError: action.payload
      };
    default:
      return state;
  }
};
