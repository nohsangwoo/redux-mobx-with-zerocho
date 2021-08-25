import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const addPost = createAsyncThunk("post/add", async (data, thunkAPI) => {
  console.log(data);

  const result = await delay(500, {
    title: "new post",
    content: "contents",
  });

  return result;
});

// export const addPost = (data) => {
//   return {
//     type: "ADD_POST",
//     data,
//   };
// };
