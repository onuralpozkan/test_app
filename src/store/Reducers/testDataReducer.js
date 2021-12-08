import * as actionTypes from "../Actions/actionTypes";
import { initialState } from "./initialState";


const testDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_BEGIN:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_DATA_SUCCESS:
      return { ...state, isLoading: false, tests: action.payload };
    case actionTypes.FETCH_DATA_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default testDataReducer;