import ACTION_STRING from './actionStrings';
import {Logout, userID} from '../../utility/axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// Action Logout
const logoutPending = () => ({
  type: ACTION_STRING.logout.concat(ACTION_STRING.pending),
});

const logoutRejected = error => ({
  type: ACTION_STRING.logout.concat(ACTION_STRING.rejected),
  payload: {error},
});

const logoutFulfilled = () => ({
  type: ACTION_STRING.logout.concat(ACTION_STRING.fulfilled),
});

const logoutThunk = token => {
  return async dispatch => {
    try {
      dispatch(logoutPending());
      await Logout(token);
      await localStorage.removeItem('token');
      await localStorage.removeItem('role');

      dispatch(logoutFulfilled());
    } catch (error) {
      dispatch(logoutRejected(error));
      console.log(error);
    }
  };
};

// Action Get user by id
const profilePending = () => ({
  type: ACTION_STRING.profile.concat(ACTION_STRING.pending),
});

const profileRejected = error => ({
  type: ACTION_STRING.profile.concat(ACTION_STRING.rejected),
  payload: {error},
});

const profileFulfilled = data => ({
  type: ACTION_STRING.profile.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const userIDThunk = (token, navigate, errorNav) => {
  return async dispatch => {
    try {
      dispatch(profilePending());
      const result = await userID(token);
      console.log(result.data);
      dispatch(profileFulfilled(result.data));
      if (typeof navigate === 'function') navigate();
    } catch (error) {
      console.log(error);
      dispatch(profileRejected(error));
      if (typeof errorNav === 'function') errorNav();
    }
  };
};

// Action get data product to payment
const productFulfilled = data => ({
  type: ACTION_STRING.product.concat(ACTION_STRING.fulfilled),
  payload: {data},
});

const productThunk = (body, navigate) => {
  return async dispatch => {
    try {
      dispatch(productFulfilled(body));
      if (typeof navigate === 'function') navigate();
    } catch (error) {
      console.log(error);
    }
  };
};

  const searchFulFilled = data => ({
    type: ACTION_STRING.search.concat(ACTION_STRING.fulfilled),
    payload: {data}
  })

  const searchThunk = (body, navigate) => {
    return async dispatch => {
      try {
        dispatch(productFulfilled(body));
        if (typeof navigate === 'function') navigate ()
      } catch (error) {
        console.log(error)
      }
    }
  }

const authAction = {
  logoutThunk,
  userIDThunk,
  productThunk,
  searchThunk
};

export default authAction;
