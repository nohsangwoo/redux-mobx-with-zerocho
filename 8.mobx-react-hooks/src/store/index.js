const { observable, action } = require("mobx");

// class 형식이 아니라 일반 객체이기때문에 데코레이터 문법을 사용할수 없고 직접 감싸준다
const userStore = observable({
  isLoggingIn: false,
  data: null,
  logIn(data) {
    this.isLoggingIn = true;
    setTimeout(
      // action적용을 따로해준다
      // 안해도 동작은 하는데 명시적으로 action으로 감싸주는게 strict모드가 권장한다
      action(() => {
        this.data = data;
        this.isLoggingIn = false;
        postStore.data.push(1);
      }),
      2000
    );
  },
  logOut() {
    this.data = null;
  },
});

const postStore = observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
  // computed 관련내용
  // getter
  // data가 변경되기 전까지는 this.data.length의 값을 캐싱해준다
  get PostLength() {
    return this.data.length;
  },

  set post(value) {
    this.data = value;
  },
});

export { userStore, postStore };
