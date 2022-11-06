import actionStrings from "../actions/actionStrings";
// buat reducers
// (prevState, action) => {}

const initialState = {
    // default value
    number: 0,
};

const counterReducer = (prevState = initialState, action) => {
    // lakukan pengondisian untuk masing masing action
    switch (action.type) {
        case actionStrings.counterUp:
            //   const newCounter = prevState.number + 1;
            return {
                ...prevState,
                number: prevState.number + 1,
            };
        case actionStrings.counterDown:
            //   const newCounter = prevState.number - 1;
            return {
                ...prevState,
                number: prevState.number === 0 ? 0 : prevState.number - 1,
            };
        case actionStrings.counterReset:
            return {
                ...prevState,
                number: initialState.number,
            };
        default:
            return prevState;
    }
};

export default counterReducer;