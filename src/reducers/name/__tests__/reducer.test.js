import reducer, { initialState } from "../reducer";
import { setName } from "../actionCreators";

const action = setName("Test");

describe("name/reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should set name to "Test"`, () => {
    expect(reducer({}, action)).toEqual("Test");
  });
});
