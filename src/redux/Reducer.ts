import {clearAsyncStorage, removeData, storeData} from '../utils/AsyncStorageUtils';
import {
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  UPDATE_AUTH_STATUS,
} from './action';

const initialState = {
  isLoggedIn: false,
  signInData: null,
};
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      storeData('signupData', action.payload);
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      storeData('users', action.payload);
      return {
        ...state,
        isLoggedIn: true,
        signInData: action.payload,
      };
    case LOGOUT:
      // clearAsyncStorage();
      removeData('users')
      return {
        ...state,
        isLoggedIn: false,
        signInData: null,
      };
    case UPDATE_AUTH_STATUS:
      return {
        ...state,
        signInData: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
