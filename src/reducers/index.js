import { combineReducers } from "redux";
import customersReducer from "./customersReducer";
// import detailReducer from "./gameReducer";

/**
 * Combine all reducers into One
 */
const rootReducer = combineReducers({
  customers: customersReducer,
});

export default rootReducer;
