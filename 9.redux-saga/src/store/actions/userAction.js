export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    dispatch(logInRequest());
    try {
      setTimeout(() => {
        dispatch(logInSuccess(data));
      }, 2000);
    } catch (e) {
      dispatch(loginInFailure(e));
    }
  };
};

export const logInRequest = (data) => {
  // action
  return {
    type: "LOG_IN_REQUEST",
  };
};

export const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};
export const loginInFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data,
  };
};

export const signUpSuccess = (data) => {
  return {
    type: SIGN_UP_SUCCESS,
    data,
  };
};

export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};

export const logoutAction = {
  type: LOG_OUT,
};

export const signUp = (data) => {
  return {
    type: SIGN_UP,
    data,
  };
};
