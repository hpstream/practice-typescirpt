type StringToUnion<
  T extends string,
  R = never
> = T extends `${infer f}${infer M}` ? StringToUnion<M, R | f> : R;
type Test = "123";

type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

let Test1 = "123";
type ss = typeof Test1;

type Result1 = StringToUnion<ss>; // expected to be "1" | "2" | "3"

export {};
