import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  console.log("createAsyncThunk data", data);

  // thunk에서 getState 사용하기
  // const state = thunkAPI.getState();

  // createAsyncThunk에서는 await에 try catch를 사용하지 않는다
  // createAsyncThunk에 해당 기능이 자동으로 적용돼있기때문에
  // try catch를 적용하면 rejected를 인식하지 못하고 무조건 fulfilled으로 넘어가버린다.
  const result = await delay(500, {
    userId: 1,
    nickName: "Sangwoo Noh",
  });

  return result;

  // 이부분에 axios같은 데이터 요청을 날리면 됨
  // pending, fulfilled, rejected
});

// export const logIn = (data) => {
//   // async action creator
//   return (dispatch, getState) => {
//     dispatch(logInRequest());
//     try {
//       setTimeout(() => {
//         dispatch(logInSuccess(data));
//       }, 2000);
//     } catch (e) {
//       dispatch(loginInFailure(e));
//     }
//   };
// };

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
