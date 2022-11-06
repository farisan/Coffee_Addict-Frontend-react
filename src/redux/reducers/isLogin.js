
import actionStrings from "../actions/actionStrings";

const isLogin = {
    intialState: false,
}

const isLoginReducer = (prevState = isLogin.intialState, actions) => {
    switch (actions.type) {
        case actionStrings.Login:
            return {
                prevState: true,
            }

        case actionStrings.Logout:
            return {
                prevState: false,
            }

        default:
            return prevState
    }
};

export default isLoginReducer;