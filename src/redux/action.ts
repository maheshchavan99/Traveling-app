export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const UPDATE_AUTH_STATUS = 'UPDATE_AUTH_STATUS';

export const registerSuccess = (users: any) => {
  return {
    type: REGISTER_SUCCESS,
    payload: users,
  };
};

export const loginSuccess = (user: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};

export const updateAuthStatus = (user: any) => {
  return {
    type: UPDATE_AUTH_STATUS,
    payload: user,
  };
};
