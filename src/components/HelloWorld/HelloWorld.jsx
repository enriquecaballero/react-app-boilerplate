import React, { PureComponent } from "react";
import styles from "./HelloWorld.scss";

export default class HelloWorld extends PureComponent {
  state = {
    name: ""
  };
  onChange = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <h2 className={styles.Title}>Hello, {name}!</h2>
        <input value={name} onChange={this.onChange} />
      </div>
    );
  }
}

HelloWorld.defaultProps = {
  name: ""
};
