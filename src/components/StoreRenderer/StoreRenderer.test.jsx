import React from "react";
import renderer from "react-test-renderer";
import mockStore from "../../store";
import StoreRenderer from "./StoreRenderer";

const initialState = {};
const store = mockStore(initialState);

describe("StoreRenderer", () => {
  it("renders", () => {
    const component = renderer.create(
      <StoreRenderer state={store.getState()} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
