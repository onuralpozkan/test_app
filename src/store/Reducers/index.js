import { combineReducers } from "redux";
import modalReducer from "./modalReducers";
import testCardReducer from "./testCardReducers";
import testDataReducer from "./testDataReducer";
const rootReducer = combineReducers({
  testCardReducer,
  testDataReducer,
  modalReducer
});
export default rootReducer;