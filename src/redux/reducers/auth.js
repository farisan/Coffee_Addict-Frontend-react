import ACTION_STRING from '../actions/actionStrings';

const initialState = {
  isError: false,
  isLoading: false,
  isFulfilled: false,
  error: null,
  profile: {
    email: null,
    phone_number: null,
    displayname: null,
    firstname: null,
    lastname: null,
    role: null,
    gender: null,
    birthday: null,
    address: null,
    image: `https://res.cloudinary.com/dx7cvqczn/image/upload/v1667811029/coffee_addict/pic_default.png`,
  },
  product: {
    id_product: null,
    price: 0,
    name_product: null,
    status: null,
    delivery: null,
    total: 0,
    image: null,
    qty: 1,
    payment_method: null,
    size: null,
    id_promo: null,
    disc: null
  },
};

const authReducer = (prevState = initialState, {type, payload}) => {
  const {product, logout, profile, pending, rejected, fulfilled} =
    ACTION_STRING;

  switch (type) {
    // profile
    case profile + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
        error: null,
      };
    case profile + rejected:
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        isFulfilled: false,
        error: payload.error.response.data.msg,
      };
    case profile + fulfilled:
      return {
        ...prevState,
        isError: false,
        isFulfilled: true,
        isLoading: false,
        error: null,
        profile: {
          email: payload.data.result[0].email,
          role: payload.data.result[0].role,
          phone_number: payload.data.result[0].phone_number,
          displayname: payload.data.result[0].displayname,
          firstname: payload.data.result[0].firstname,
          lastname: payload.data.result[0].lastname,
          gender: payload.data.result[0].gender,
          birthday: payload.data.result[0].birthday,
          address: payload.data.result[0].address,
          image: payload.data.result[0].image,
        },
      };

    // product
    case product + fulfilled:
      return {
        ...prevState,
        isError: false,
        isFulfilled: true,
        isLoading: false,
        error: null,
        product: {
          ...prevState.product,
          ...payload.data,
        },
      };

    // logout
    case logout + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case logout + rejected:
      return {
        ...prevState,
        isLoading: false,
        isError: true,
        error: payload.error.response.data.msg,
      };

    case logout + fulfilled:
      return initialState;

    default:
      return prevState;
  }
};

export default authReducer;
