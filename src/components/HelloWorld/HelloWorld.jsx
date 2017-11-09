import React from "react";
import StoreRenderer from "../StoreRenderer";

export default function HelloWorld (props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <input
        value={props.name}
        onChange={event => props.setName (event.target.value)}
      />
      <StoreRenderer />
    </div>
  );
}

HelloWorld.defaultProps = {
  name: ""
};
