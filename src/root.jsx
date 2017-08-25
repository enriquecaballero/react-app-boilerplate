/* @flow */

import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import Router from "./components/";
import store from "./store/";
import "font-awesome/less/font-awesome.less";

const render = (Component: ReactClass<any>) => {
  ReactDOM.render (
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById ("root")
  );
};

render (Router);

declare var module: any;

if (module.hot) {
  module.hot.accept ("./components/", () => {
    render (Router);
  });
}
