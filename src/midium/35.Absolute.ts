type Absolute<T extends number> = `${T}` extends `-${infer E}` ? E : T;

type Test = -100;
type Result = Absolute<Test>; // expected to be "100"

type Test1 = 100;
type Result1 = Absolute<Test1>; // expected to be "100"

export {};
