import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
} from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";

import counterReducer from "./reducers/counter";
import isLoginReducer from "./reducers/isLogin"

const middleware = applyMiddleware(rpm, logger);
const reducers = combineReducers({
    counter: counterReducer,
    islogin: isLoginReducer,
});
const store = createStore(reducers, middleware);

export default store;