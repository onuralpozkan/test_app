import { combineReducers } from "redux";
import testCardReducer from "./testCardReducers";
import testDataReducer from "./testDataReducer";
const rootReducer = combineReducers({
  testCardReducer,
  testDataReducer
});
export default rootReducer;