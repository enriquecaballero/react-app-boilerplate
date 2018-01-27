import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage: storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(logger)));

if (module.hot) {
  module.hot.accept("../reducers/", () =>
    store.replaceReducer(require("../reducers/"))
  );
}

export const persistor = persistStore(store);

export default store;
