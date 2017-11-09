import React from "react";

export default function StoreRenderer (props) {
  return <pre children={`redux: ${JSON.stringify (props.state, null, 2)}`} />;
}

StoreRenderer.defaultProps = {
  state: {}
};
