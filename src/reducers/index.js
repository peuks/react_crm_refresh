import { combineReducers } from "redux";
import customersReducer from "./customersReducer";
import invoicesReducer from "./invoicesReducer";
import userReducer from "./userReducer";
// import detailReducer from "./gameReducer";

/**
 * Combine all reducers into One
 */
const rootReducer = combineReducers({
  customers: customersReducer,
  invoices: invoicesReducer,
  user: userReducer,
});

export default rootReducer;
