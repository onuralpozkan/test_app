import * as actionTypes from "../Actions/actionTypes";
import { initialState } from "./initialState";


const testCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_TEST:
      return { ...state, singleTest: action.payload };
    case actionTypes.GET_TEST_INFO:
      return { ...state, testInfo: action.payload };
    default:
      return state;
  }
};

export default testCardReducer;