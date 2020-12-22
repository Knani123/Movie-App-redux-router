import { ADD, SER } from "./type.js";
export const addMovie = (newMov) => {
  return {
    type: ADD,
    payload: newMov,
  };
};
export const serMovie = (newVal) => {
  return {
    type: SER,
    payload: newVal,
  };
};
