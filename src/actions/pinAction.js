import { ADD_PIN, DELETE_PIN, GET_PIN, UPDATE_ID } from "../constants/types";

export const addPin = (pin) => {
  return {
    type: ADD_PIN,
    payload: pin,
  };
};

//get pin

export const getPin = (id) => ({
  type: GET_PIN,
  payload: id,
});

//UPDATE ID
export const updateId = (pin) => ({
  type: UPDATE_ID,
  payload: pin,
});

//DELETE PIN
export const deletePin = (id) => ({
  type: DELETE_PIN,
  payload: id,
});
