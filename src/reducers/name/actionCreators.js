import { SET_NAME } from "./actions";

export const setName = name => {
  return {
    type: SET_NAME,
    name
  };
};
