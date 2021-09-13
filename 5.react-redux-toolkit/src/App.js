import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addPost } from "./store/actions/postAction";
import { logIn } from "./store/actions/userAction";
import userSlice from "./store/reducers/user";
import postSlice from "./store/reducers/post";
import { createSelector } from "@reduxjs/toolkit";

const priceSelector = (state) => state.user.prices;
// reselector 사용법
// redux toolkit에서는 createSelector로 네이밍 돼서 사용한다.
// 첫번째 인자는 캐싱의 기준이되는 데이터 값
// 두번째 인자는 기준이되는 데이터 값으로 어떤 작업을 한 후 return되는 값

/* 일반적인 사용 방법
const sumPriceSelector = createSelector(priceSelector, (prices) =>
  prices.reduce((a, c) => a + c, 0)
);
*/

// createSelecor를 export해서 사용하는 방법
// 다른 컴포넌트에서 재사용 하고싶다면 함수로 한단계 더 감싸서 export 시켜준다
export const makeSumPriceSelector = () =>
  // prices의 값의 변화가 없다면 해당 return 값을 캐싱해준다
  createSelector(priceSelector, (prices) => prices.reduce((a, c) => a + c, 0));

const sumPriceSelector = makeSumPriceSelector();

const outside = (dispatch) => () => {
  dispatch(
    logIn({
      id: 2,
      password: "5678",
      nickName: "JongRan Kim",
    })
  );
};

function App() {
  const { user, posts } = useSelector((state) => state);
  const totalPrices = useSelector(sumPriceSelector);

  const dispatch = useDispatch();

  console.log(totalPrices);

  const dumyCallback = () => {
    console.log("dumyCallback");
    return "return dumy";
  };

  const onClickForHoc = useCallback(() => {
    outside(dispatch);
  }, []);

  const onClick = useCallback(() => {
    dispatch(
      logIn({
        id: 1,
        password: "1234",
        nickName: "Sangwoo Noh",
      })
    );
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  const onAddPost = useCallback(() => {
    dispatch(addPost());
  }, []);

  const onClearPost = useCallback(() => {
    dispatch(postSlice.actions.clearPost());
  }, []);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100px",
          height: "100px",
          border: "1px solid red",
        }}
      >
        <div>합계</div>
        <div>
          {totalPrices}
          {/* 이내용이 만약 백만번 연산하는 거라면 매번 리렌더링 될때마다 자원소모가 심해져 성능저하를 일으킨다 */}
          {/* 이런 연산이 많은 작업을 redux에서 불러온 데이터를 이용하는 경우 reselector를 사용해줘야 한다. */}
          {/* <b>{prices.reduce((a, c) => a + c, 0)}원</b> */}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>로그인 상태</div>
        <div>{user.loginState}</div>
      </div>
      {user.data ? <div>{user.data.nickName}</div> : "please login"}
      <button onClick={onClick}>Login</button>
      <button onClick={onLogOut}>LogOut</button>
      <button onClick={onAddPost}>add new post</button>
      <button onClick={onClearPost}>Clear post</button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
        }}
      >
        <div>{posts?.isLoading ? "새게시물 작성중" : ""}</div>
        {posts.data.map((postData, index) => {
          return (
            <div key={index}>
              <div>{postData.title}</div>
              <div>{postData.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
