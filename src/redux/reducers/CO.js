
const initialState = {
    // default value
    address: "",
    phone_number: "",
};

const initialStateDIsplay = {
    displayname: ""
}
const getCO = (prevState = initialState, action) => {
    // lakukan pengondisian untuk masing masing action
    if (action.type === 'SET_ADDRESS') {
        return ({
            ...prevState,
            [action.inputType]: action.value
        });
    }
    return prevState
};
const getdisplay = (prevState = initialStateDIsplay, action) => {
    // lakukan pengondisian untuk masing masing action
    if (action.type === 'SET_DISPPLAY') {
        return ({
            ...prevState,
            [action.inputType]: action.value
        });
    }
    return prevState
};

// export default getCO;
export { getCO, getdisplay };