/* redux의 rootReducer를 정의하세요 */

import { combineReducers } from "redux";
import { postReducer } from "./4_redux";

export const rootReducer = combineReducers({ postReducer });

/*
리듀서들 모아둔곳 combine 안에는 리듀서들만!
*/
