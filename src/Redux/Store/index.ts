import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../Reducers";
import rootSaga from "../Saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistReducer,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const logger = createLogger();
const saga = createSagaMiddleware();

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    saga,
    logger,
  ],
});

// const store = createStore(
//   rootReducer,
//   undefined,
//   applyMiddleware(saga, logger)
// );

saga.run(rootSaga);

export default store;
