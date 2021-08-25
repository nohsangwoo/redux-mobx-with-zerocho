# redux and mobx lectrue with zerocho

## 1. redux

## 2.redux

## - directory structure

## action 나누기

## reducer 나누기

## middleware와 thunk

## 3.redux

## react redux

- install
  npm i react react-dom
  npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
  npm i -D react-hot-loader webpack webpack-cli webpack-dev-server
  npm i react-redux
  npm i @pmmmwh/react-refresh-webpack-plugin

or install CRA

## 4.redux

## class 형식 리액트에서 redux 연결 및 사용법

## immer

- npm install immer
- redux에서 불변성 지키려고 똥꼬쑈 한부분을 알아서 처리해준다
  예컨데
- deep.deeper.deepest.a = "b"; 라는 작업을 리덕스에서 하고싶다면

```
deep:{
  ...prevState,
  data:null,
  deeper:{
    ...prevState.deep.deeper,
    deepest:{
      ...prevState.deep.deeper.deepest,
      a:"b"
    }
  }
}
```

위 작업을 거쳐야하는데 이 불변성을 자동으로 지켜주는게 immer

```
<!-- with immer -->
draft.data = null;
draft.isLogginIn = false;
draft.loginState = "로그아웃 성공";
```

immer를 사용하면 이처럼 간단해진다
이전에는 immutablejs가 있는데 그냥 immer쓰던가 redux toolkit으로 넘어가자

## 5. react-redux-toolkit

## redux toolkit

- npm install @reduxjs/toolkit

## createSlice
