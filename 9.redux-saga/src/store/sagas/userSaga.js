import {
  all,
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { LOG_IN, LOG_IN_FAILURE, LOG_IN_SUCCESS } from "../actions/userAction";
console.log("user saga");

const HELLO_SAGA = "HELLO_SAGA";

function* loginAPI() {}

function* logIn() {
  try {
    yield call(loginAPI);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* hello() {
  try {
    yield put({
      type: "HELLO_TWO",
    });
    console.log("hello");
  } catch (error) {
    console.log(error);
  }
}

function* watchHello() {
  //   yield takeEvery(HELLO_SAGA, function* () {
  yield takeLatest(HELLO_SAGA, function* () {
    console.log(1);
    console.log(2);
    yield delay(1000);
    console.log(3);
    console.log(4);
    console.log(5);
    yield put({
      type: "BYE_SAGA",
    });
  });
}
/*
function* watchHello() {
  // 반복문 설정을 안해두면 saga함수가 한번만 실행되고 생명주기가 끝나버려서
  // 이후 take작동(dispatch에 의한 반응)에 대하여 대응하지 못한다
  // 따라서 반복문 설정을 해주어 함수의 생명주기를 끝내지 않고
  //  다음에도 saga요청에 의해 take작동을 대응할수있게 해준다.
  //   무한 반복시(while(true)로 설정해도 되고)
  // 해당 saga동작이 5번만 실행되게 하고싶다면 아래와 같이 반복문에 조건을 건다.
  while(true) {
    // yield로 일단 함수가 멈춘상태로 대기하는데
    //  이때 redux saga의 take기능을 사용한다 take함수의 기능설명은 아래와 같다.
    //  1. HELLP_SAGA의 액션이 작동되는 순간을 기다리겠다.(트리거가 동작될때)
    //  2. 그리고 해당 액션이 동작할때 이하의 내용이 실행되게 하겠다(next()의 기능)
    // * 정확히는 action트리거가 dispatch에 의해 건드려 지는 순간을 말한다
    // * 뭔가의 문제로 액션 함수가 실행 안돼도, 리듀서까지 동작이 안돼도
    // 해당 액션트리거가 dispatch에 의하여 건드려진다면 함수 작동을 다시 재개 하겠다는 의미
    console.log("before HELLO_SAGA");
    yield take(HELLO_SAGA);
    console.log("after HELLO_SAGA");
    //   비동기 요청, 타이머 이런 내용을 넣어도 된다
  }
}
*/

function* watchLogin() {
  // LOGIN트리거가 동작하면 take 함수에 의하여 중단점이 풀리고
  // put(dispatch)가 실행된다.
  while (true) {
    yield take(LOG_IN);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  }
}

function* wathSignUp() {
  yield;
}

export default function* userSaga() {
  //   yield all([
  //     fork(helloSaga), // helloSaga
  //     fork(watchLogin), // watchLogin
  //   ]);
  //   watch함수가 여러개 존재하면 all로 묶어준다
  yield all([watchHello(), watchLogin(), wathSignUp()]);
}
