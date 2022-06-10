type AppendToObject<O extends object, K extends string, V> = {
  [P in keyof O | K]: P extends keyof O ? O[P] : V;
};

type Computed<T> = {
  [p in keyof T]: T[p];
};

type Test = {id: "1"};

type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }

// type AppendToObject1<O1 extends object, O2 extends object> = Computed<O1 & O2>;
// let S1 = {
//   value: 4,
//   use: Use,
// };

// type Test2 = typeof S1;
// type sss = AppendToObject1<Test2, Test>;

export {};
