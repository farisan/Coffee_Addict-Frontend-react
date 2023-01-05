
const initialState = {
    address: "",
    phone_number: "",
    displayname: "",
};

const initialStateProduct = {
    price: "",
    name_product: "",
    size: "",
    image: "",
    totalPrice: "",
    discount: "",
    codeDiscount: "",
    shipping: "",
}

const intialStateProductCounter = {
    number: 1,
};


const getDataProfile = (prevState = initialState, action) => {
    // lakukan pengondisian untuk masing masing action
    if (action.type === 'SET_DATA_PROFILE') {
        return ({
            ...prevState,
            [action.inputType]: action.value
        });
    }
    return prevState
};



const getProduct = (prevState = initialStateProduct, action) => {
    // lakukan pengondisian untuk masing masing action
    if (action.type === 'SET_PRODUCT_DETAIL') {
        return ({
            ...prevState,
            [action.inputType]: action.value
        });
    }
    return prevState
};



const counter = (prevState = intialStateProductCounter, action) => {
    // lakukan pengondisian untuk masing masing action
    switch (action.type) {
        case "COUNTER_UP":
            //   const newCounter = prevState.number + 1;
            return {
                ...prevState,
                number: prevState.number + 1,
            };
        case "COUNTER_DOWN":
            //   const newCounter = prevState.number - 1;
            return {
                ...prevState,
                number: prevState.number === 1 ? 1 : prevState.number - 1,
            };
        case "COUNTER_RESET":
            return {
                ...prevState,
                number: intialStateProductCounter.number,
            };
        default:
            return prevState;
    }
};


export { getDataProfile, getProduct, counter };