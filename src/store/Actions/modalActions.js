import * as actionTypes from './actionTypes.js';
export const openModal = () => {
  return {
    type: actionTypes.OPEN_MODAL,
  }
}
export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  }
}