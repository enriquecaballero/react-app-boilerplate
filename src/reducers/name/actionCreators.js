/* @flow */

import { SET_NAME } from "./actions";

export const setName = (name: string): Object => {
  return {
    type: SET_NAME,
    name
  };
};
