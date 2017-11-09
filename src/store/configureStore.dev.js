import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/";
import { persistStore, autoRehydrate } from "redux-persist";
import logger from "redux-logger";

const store = createStore (
  rootReducer,
  compose (applyMiddleware (logger), autoRehydrate ())
);

if (module.hot) {
  module.hot.accept ("../reducers/", () =>
    store.replaceReducer (require ("../reducers/"))
  );
}

export const persistor = persistStore (store);

export default store;
