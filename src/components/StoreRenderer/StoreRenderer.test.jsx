import React from "react";
import renderer from "react-test-renderer";
import store from "../../store";
import StoreRenderer from "./StoreRenderer";

describe ("<StoreRenderer />", () => {
  it ("works", () => {
    const component = renderer.create (
      <StoreRenderer state={store.getState ()} />
    );
    const tree = component.toJSON ();
    expect (tree).toMatchSnapshot ();
  });
});
