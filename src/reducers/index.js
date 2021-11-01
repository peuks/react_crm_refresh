import { combineReducers } from "redux";
import customersReducer from "./customersReducer";
import userReducer from "./userReducer";
// import detailReducer from "./gameReducer";

/**
 * Combine all reducers into One
 */
const rootReducer = combineReducers({
  customers: customersReducer,
  user: userReducer,
});

export default rootReducer;
