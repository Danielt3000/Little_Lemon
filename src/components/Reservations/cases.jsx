import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, guest: state.guest + 1 };
    case "DECREASE":
      return { ...state, guest: state.guest - 1 };
    case "OPEN":
      return { ...state, open: !state.open };
    case "ESCPECIAL":
      return { ...state, occasion: "Especial Event" };
    case "VALENTIN":
      return { ...state, occasion: "Valentin Day" };
    case "NORMAL":
      return { ...state, occasion: "Normal Date" };
    default:
      return state;
  }
};

export default reducer;
