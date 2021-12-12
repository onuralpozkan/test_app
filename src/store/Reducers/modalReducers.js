import * as actionTypes from "../Actions/actionTypes";
import { initialState } from "./initialState";


const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case actionTypes.CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};

export default modalReducer;