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

## 동기인경우엔 reducer파일에서 바로 불러온다

## 비동기인경우엔 action파일에 따로 구현해서 사용할때도 action파일에서 트리거를 불러오고

- extraReducers를 builder의 addCase를 이용하여 구성하면 typesciprt 사용시 타입추론이 잘된다
- addMatcher
  여러 액션중 공통되는 로직이 있다면 조건을 걸어서 해결해버릴수있음

## reselector

- redux 사용시 리렌더링으로 자원소모되는 부분 해결해준다

## 6. mobx

- npm i mobx

## 7. mobx-react

- react 안에서 mobx 사용하기
- npm install mobx mobx-react

## 데코레이터 문법

- 고차함수로 감싸는 경우 사용한다.
- class문법에서만 사용할수있다.
- 정식 문법이 아니라 사용방법이 바뀌는 경우도 있다.

## observer and mobx-devtools

- CRA에서 eject 없이 mobx 데코레이터 사용하기
  // npm
  npm install --save -d customize-cra
  npm install --save -d react-app-rewired

- config-overrides.js를 root폴더에 추가 웹팩 오버라이딩 가능하게 하는 부분인듯

```
const {
  addDecoratorsLegacy, // decorator를 사용할 수 있도록 해주는 config
  disableEsLint,
  override,
} = require("customize-cra");

// 사용자 정의 웹팩 설정
module.exports = {
  webpack: override(
      disableEsLint(),
      addDecoratorsLegacy()
  ),
};
```

- babel 플러그인 설치
  npm install --dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties

- 추가적인 es7 데코레이터 설치
  npm install --dev core-
- package.json에 내용추가

```
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
  }
```

## Patterns that replace 'state' and 'setstate' with 'mobx'

## mobx developer tools 을 chrome 웹스토어 확장 프로그램에서 적용해준다.

- 녹화버튼 누르고 mobx관련 동작하면 log가 뜬다

## 8.mobx-react-hooks

## mobx Computed 내용

- mobx에서 불필요한 연산을 하지않고 캐싱하고 싶은 내용이 있다면 getter를 사용하면 된다.

## replace useLocalStore and userObserver

// useLocalStore is deprecated
// useObserver is Deprecated

## mobx6에선 데코레이터가 자체적으로 다 사라졌다

- 고차 함수 형태로 컴포넌트를 감싸준다.

## 9.redux-saga

- npm i redux-saga
- generator 문법 (보통 무한의 개념이랑 비동기 처리할때 많이 쓰인다)
  함수의 실행을 중간에 멈출 수 있고 원할 때 재개할 수 있다

saga 또한 reducer처럼 combine해주는 기능으로 구조를 잡는다.

## sagaMiddleware

- toolkit에 적용해봐야함
  ref : https://im-developer.tistory.com/195

## generator 문법
