import { list } from "./data";
import { ADD } from "../action/type";
const initState = list;
const moveReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return [action.payload].concat(state);

    default:
      return state;
  }
  return state;
};

export default moveReducer;
