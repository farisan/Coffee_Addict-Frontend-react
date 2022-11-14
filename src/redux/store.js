import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
} from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";

// import counterReducer from "./reducers/counter";
import isLoginReducer from "./reducers/isLogin";
import { getDataProfile, getProduct, counter } from "./reducers/GetData";

const middleware = applyMiddleware(rpm, logger);
const reducers = combineReducers({
    counter: counter,
    islogin: isLoginReducer,
    dataProfile: getDataProfile,
    dataProduct: getProduct,
});
const store = createStore(reducers, middleware);

export default store;