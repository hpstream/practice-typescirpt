import type {Equal, Expect, NotAny} from "@type-challenges/utils";

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};
type DeepReadonly<T> = {
  readonly [p in keyof T]: T[p] extends object ? DeepReadonly<T[p]> : T[p];
};

type Todo = Expect<Equal<DeepReadonly<X>, Expected>>; // should be same as `Expected`
