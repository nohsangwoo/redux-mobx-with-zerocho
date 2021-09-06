const { observable, autorun, runInAction, reaction, action } = require("mobx");

// 객체를 observable로 감싸면 저장소가 완성됨
const state = observable({
  compA: "a",
  compB: 12,
  compC: null,
});

// 일종의 미들웨어 observable에 의해 감싸진 저장소내용이 변경되면 autorun이 자동으로 실행됨
autorun(() => {
  console.log("changed", state.compA);
});

// reaction
// 저장소에서 특정 데이터를 타겟팅하여 해당 데이터가 변경됐을 경우에만 작동하는 함수
// 첫번째 인자에서 지정된(return 하는) 저장소의 데이터가 변경됐을때만 실행됨
reaction(
  () => {
    //   target
    return state.compB;
  },
  () => {
    //   excute
    console.log("compB is changed");
  }
);

// store data를 바꾸고 싶을때
// state.compA = "C";
// state.compB = "C";
// state.compC = "C";
// 한번에 3개가 연속으로 실행했다고 autorun이 3번실행되지 않음 (한번만 실행됨)
// 왜냐하면 연속으로 실행한것은 하나의 묶음으로 생각함

// runInAction을 함수화 시켜서 원할때 불러와서 실행하게 만든다
const change = action(() => {
  state.compA = "c";
  state.compB = 25;
  state.compC = "c";
});

change();
change();

// 액션을 그냥 묶어주는 것 (특별한 기능이 존재하는것은 아님)
runInAction(() => {
  state.compA = "c";
  state.compB = 25;
  state.compC = "c";
});

runInAction(() => {
  state.compC = "d";
});
