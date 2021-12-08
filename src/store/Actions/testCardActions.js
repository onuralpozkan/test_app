import * as actionTypes from './actionTypes.js';

export const startTest = (questions) => {
  return {
    type: actionTypes.OPEN_TEST,
    payload: questions
  };
};
export const getTestInfo = (info) => {
  return {
    type: actionTypes.GET_TEST_INFO,
    payload: info
  };
};
