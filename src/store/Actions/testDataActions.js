import * as actionTypes from "./actionTypes";
import data from "../api/db.json";

export const fetchDataBegin = () => {
  return {
    type: actionTypes.FETCH_DATA_BEGIN,
  };
};
export const fetchDataFailure = (error) => {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    payload: error,
  };
};
export const fetchDatauccess = ({ data }) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data,
  };
};
export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataBegin());
      const apiData = data.tests;
      dispatch({
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: apiData,
      });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_DATA_FAILURE, payload: error });
    }
  };
};
