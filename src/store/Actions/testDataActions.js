import axios from 'axios';
import * as actionTypes from './actionTypes';

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
      const url = 'http://localhost:8000/tests';
      const response = await axios.get(url);
      const apiData = response?.data;
      dispatch({
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: apiData,
      });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_DATA_FAILURE, payload: error });
    }
  };
};
