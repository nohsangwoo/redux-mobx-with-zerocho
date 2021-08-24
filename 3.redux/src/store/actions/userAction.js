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
    type: "LOG_IN_FAILURE",
    error,
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
