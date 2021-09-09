import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { LOG_IN, LOG_IN_FAILURE, LOG_IN_SUCCESS } from "../actions/userAction";
console.log("user saga");

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

function* watchLogin() {
  yield takeLatest(LOG_IN, logIn);
}

function* helloSaga() {
  console.log("hello saga");
  yield;
}

export default function* userSaga() {
  yield all([all([fork(watchLogin)]), helloSaga()]);
}
