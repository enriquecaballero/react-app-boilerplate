import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Router from "./components/";
import store, { persistor } from "./store/";
import "font-awesome/less/font-awesome.less";

const render = (Component: ReactClass<any>) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <PersistGate loading="Loading..." persistor={persistor}>
          <Component />
        </PersistGate>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render(Router);

if (module.hot) {
  module.hot.accept("./components/", () => {
    render(Router);
  });
}
