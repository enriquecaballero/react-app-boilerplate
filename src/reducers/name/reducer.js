/* @flow */

import { SET_NAME } from "./actions";

export default function (state: string = "World", action: Object): State {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
}
