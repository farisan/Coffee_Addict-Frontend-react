
export function setDataProfile(type, value) {
    return {
        type: 'SET_DATA_PROFILE',
        inputType: type,
        value: value
    }
}

export function setDataProduct(type, value) {
    return {
        type: 'SET_PRODUCT_DETAIL',
        inputType: type,
        value: value
    }
}

export function counterUp(type, value) {
    return {
        type: "COUNTER_UP",
    };
}
export function counterDown(type, value) {
    return {
        type: "COUNTER_DOWN",
    };
}
export function counterReset(type, value) {
    return {
        type: "COUNTER_RESET",
    };
}