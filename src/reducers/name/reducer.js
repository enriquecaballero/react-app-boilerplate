import { SET_NAME } from "./actions";

export default function (state = "World", action) {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
}
