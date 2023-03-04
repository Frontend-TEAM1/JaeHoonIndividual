
import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "../../src/store/4_redux"
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger'

const reduxConfig = () => {
    const store = createStore(rootReducer, 
        process.env.NODE_ENV === "development" && composeWithDevTools(applyMiddleware(logger))
    );
    return store;
}

// export const store = createStore(rootReducer) ;
export default reduxConfig;