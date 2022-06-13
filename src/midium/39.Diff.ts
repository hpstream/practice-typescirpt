type Foo = {
  a: string;
  b: number;
};
type Bar = {
  a: string;
  c: boolean;
};

// 你的答案
type Diff<O, O1> = {
  [P in keyof (O & O1) as P extends keyof (O | O1)
    ? never
    : P]: P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never;
};
type Result1 = Diff<Foo, Bar>; // { b: number, c: boolean }
type Result2 = Diff<Bar, Foo>; // { b: number, c: boolean }

export {};
