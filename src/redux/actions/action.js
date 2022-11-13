export function setAddress(type, value) {
    return {
        type: 'SET_ADDRESS',
        inputType: type,
        value: value
    }
}

export function setDisplay(type, value) {
    return {
        type: 'SET_DISPPLAY',
        inputType: type,
        value: value
    }
}