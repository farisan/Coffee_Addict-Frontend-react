import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth';

export default combineReducers({
  auth: authReducer,
});