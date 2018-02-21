import React from "react";
import StoreRenderer from "../StoreRenderer";
import styles from "./HelloWorld.scss";

export default function HelloWorld(props) {
  return (
    <div>
      <h2 className={styles.Title}>Hello, {props.name}!</h2>
      <input
        value={props.name}
        onChange={event => props.setName(event.target.value)}
      />
      <StoreRenderer />
    </div>
  );
}

HelloWorld.defaultProps = {
  name: ""
};
