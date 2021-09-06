import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  console.log("createAsyncThunk data", data);

  // 에러 발생하면 rejected로 포워딩 됨
  // throw new Error("비밀번호가 틀렸습니다.");
  // thunk에서 getState 사용하기
  // const state = thunkAPI.getState();

  // createAsyncThunk에서는 await에 try catch를 사용하지 않는다
  // createAsyncThunk에 해당 기능이 자동으로 적용돼있기때문에
  // try catch를 적용하면 rejected를 인식하지 못하고 무조건 fulfilled으로 넘어가버린다.
  const result = await delay(500, data);

  return result;

  // 이부분에 axios같은 데이터 요청을 날리면 됨
  // pending, fulfilled, rejected
});
