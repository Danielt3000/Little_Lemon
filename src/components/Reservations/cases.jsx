import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, guest: state.guest + 1 };
    case "DECREASE":
      return { ...state, guest: state.guest - 1 };
    default:
      return state;
  }
};

export default reducer;
