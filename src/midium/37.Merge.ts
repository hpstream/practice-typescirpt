type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Merge<T, Q> = {
  [k in keyof (T & Q)]: k extends keyof Q
    ? Q[k]
    : k extends keyof T
    ? T[k]
    : never;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

export {};
