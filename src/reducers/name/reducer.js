import { SET_NAME } from "./actions";

export const initialState = "World";

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
}
