const { observable, autorun, runInAction } = require("mobx");

// 객체를 observable로 감싸면 저장소가 완성됨
const state = observable({
  compA: "a",
  comB: 12,
  comC: null,
});

// 일종의 미들웨어 observable에 의해 감싸진 저장소내용이 변경되면 autorun이 자동으로 실행됨
autorun(() => {
  console.log("changed", state.compA);
});

// store data를 바꾸고 싶을때
// state.compA = "C";
// state.compB = "C";
// state.compC = "C";
// 한번에 3개가 연속으로 실행했다고 autorun이 3번실행되지 않음 (한번만 실행됨)
// 왜냐하면 연속으로 실행한것은 하나의 묶음으로 생각함

runInAction(() => {
  state.compA = "C";
  state.compB = "C";
  state.compC = "C";
});

runInAction(() => {
  state.compC = "D";
});
