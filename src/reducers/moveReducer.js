import { list } from "./data";
import { ADD, SER } from "../action/type";
const initState = { list: list, ser: { rate: 1, val: "" } };
const moveReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, list: [action.payload].concat(state.list) };
    case SER:
      return { ...state, ser: action.payload };

    default:
      return state;
  }
  return state;
};

export default moveReducer;
