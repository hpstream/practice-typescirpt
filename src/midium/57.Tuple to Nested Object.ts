type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type

type TupleToNestedObject<A extends string[], T> = A extends [
  infer A,
  ...infer R
]
  ? A extends string
    ? R extends string[]
      ? Record<A, TupleToNestedObject<R, T>>
      : Record<A, T>
    : ""
  : A;
export {};
