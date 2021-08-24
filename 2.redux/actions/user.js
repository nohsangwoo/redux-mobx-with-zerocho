export const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    console.log("Login data", data);
    dispatch(logInRequest(data));
    try {
      // dispatch(
      //   logInSuccess({
      //     userId: 1,
      //     nickName: "Sangwoo Noh",
      //   })
      // );
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickName: "Sangwoo Noh",
          })
        );
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
    data,
  };
};

export const logInSuccess = (data) => {
  console.log("logInSuccess", data);
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

export const loginInFailure = (error) => {
  console.log("loginInFailure", error.message);
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
