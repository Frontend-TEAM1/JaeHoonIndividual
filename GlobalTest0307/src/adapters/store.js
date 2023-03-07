import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { rootReducer } from "../store";

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development" &&
    composeWithDevTools(applyMiddleware(logger))
);

export default store;
// context랑 같은 기능 , 전역상태 관리
