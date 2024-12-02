function bar(this: { name: string }, age: number) {}

// 获取bar函数this的类型
type BarThisType = ThisParameterType<typeof bar>;

// 获取除this以外的那个函数类型
type BarOmitThisType = OmitThisParameter<typeof bar>;

type State = {
  name: string;
};

type Store = {
  state: State;
  eat: () => void;
};

const store: Store & ThisType<State> = {
  state: {
    name: '123'
  },
  eat() {
    console.log(this.name);
  }
};
