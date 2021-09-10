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

```
<!-- generator 함수 생성 -->
function* generator() {
  console.log(1);
  console.log(2);
  yield 5;
  console.log(3);
  yield 7;
}

<!-- generator컨트롤 하기위한 작업 -->
const gen = generator();

gen.next();
// console.log에 의해서 1, 2 가 순서대로 출력
// 그리고 yield에 의해서 함수작동이 멈추고 {value:5 done: false}를 반환한다
// yield로 넘겨받은 값이5이고 함수의 작동이 완전히 끝난것이 아니다를 알려주는 done
// 만약 gen.next(); 를 두번실행하여 함수의 작동이 완전히 끝났다면
<!-- done의 값은 true를 반환한다. -->

```

다만 saga작동의 log를 보고싶을때(logger또는 reduxdevtools에서 확인하고 싶을때) dispatch사용하는곳에서 useEffect안에 넣어서 사용한다.

## SAGA에서 반복문 제어하기

## saga는 reducer와 별개로 동작한다.

- 예컨데 saga함수를 5번만 작동하도록 반복문을 설정했다고 하더라도
  이후 6번째 7번째...의 reducer는 계속 동작한다

## redux-saga : take

```
function* watchhello() {
  // 반복문 설정을 안해두면 saga함수가 한번만 실행되고 생명주기가 끝나버려서
  // 이후 take작동(dispatch에 의한 반응)에 대하여 대응하지 못한다
  // 따라서 반복문 설정을 해주어 함수의 생명주기를 끝내지 않고
  //  다음에도 saga요청에 의해 take작동을 대응할수있게 해준다.
  //   무한 반복시(while(true)로 설정해도 되고)
  // 해당 saga동작이 5번만 실행되게 하고싶다면 아래와 같이 반복문에 조건을 건다.
  for (let i = 0; i < 5; i++) {
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
```

## redux-saga : take

```
function* watchHello() {
  <!-- while(true)로 묶어주는 부분을 takeEvery로 대체한다. -->
  <!-- 첫번째 인자는 지켜볼 액션트리거-->
  <!-- 두번째 인자는 제너레이터 함수로 지켜보는 액션트리거 동작이 감지되면 실행되는 내용 -->
  yield takeEvery(HELLO_SAGA, function* () {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
  });
}
```
