import { createStore, compose } from "redux";
import rootReducer from "../reducers/";
import { persistStore, autoRehydrate } from "redux-persist";

const store = createStore (rootReducer, compose (autoRehydrate ()));

export const persistor = persistStore (store);

export default store;
