import configureMockStore from "redux-mock-store";
import middleware from "../../../store/middleware";
import { SET_NAME } from "../actions";
import { setName } from "../actionCreators";
import { initialState } from "../reducer";

const mockStore = configureMockStore([...middleware]);

describe("name/actionCreators", () => {
  it(`sets the name to "Test"`, async () => {
    const store = mockStore(initialState);
    const expectedActions = [
      {
        type: SET_NAME,
        name: "Test"
      }
    ];

    await store.dispatch(setName("Test"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
