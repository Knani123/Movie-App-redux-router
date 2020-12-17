import { ADD } from "./type.js";
export const addMovie = (newMov) => {
  return {
    type: ADD,
    payload: newMov,
  };
};
